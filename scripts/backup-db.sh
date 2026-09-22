#!/bin/bash
# Creates a timestamped mysqldump of the Lysius database into backups/,
# then deletes backups older than $RETENTION_DAYS.
#
# Usage: ./scripts/backup-db.sh
# Reads connection info from .env (DATABASE_URL) in the project root.

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$PROJECT_DIR/.env"
BACKUP_DIR="$PROJECT_DIR/backups"
RETENTION_DAYS=30
LOG_FILE="$PROJECT_DIR/backups/backup.log"

mkdir -p "$BACKUP_DIR"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

if [ ! -f "$ENV_FILE" ]; then
  log "ERROR: .env not found at $ENV_FILE"
  exit 1
fi

DATABASE_URL=$(grep '^DATABASE_URL=' "$ENV_FILE" | head -1 | cut -d '=' -f2- | tr -d '"')

if [ -z "$DATABASE_URL" ]; then
  log "ERROR: DATABASE_URL not found in .env"
  exit 1
fi

# Parse mysql://user:pass@host/db
DB_USER=$(echo "$DATABASE_URL" | sed -E 's|mysql://([^:]+):.*|\1|')
DB_PASS=$(echo "$DATABASE_URL" | sed -E 's|mysql://[^:]+:([^@]+)@.*|\1|')
DB_HOST=$(echo "$DATABASE_URL" | sed -E 's|mysql://[^@]+@([^/]+)/.*|\1|')
DB_NAME=$(echo "$DATABASE_URL" | sed -E 's|mysql://[^/]+/(.*)|\1|')

TIMESTAMP=$(date -u +"%Y-%m-%dT%H-%M-%SZ")
OUT_FILE="$BACKUP_DIR/lysius-backup-$TIMESTAMP.sql"

log "Starting backup to $OUT_FILE"

if MYSQL_PWD="$DB_PASS" mysqldump \
    --host "$DB_HOST" \
    --user "$DB_USER" \
    --single-transaction \
    --skip-lock-tables \
    "$DB_NAME" > "$OUT_FILE" 2>>"$LOG_FILE"; then
  SIZE=$(du -h "$OUT_FILE" | cut -f1)
  log "Backup successful: $OUT_FILE ($SIZE)"
else
  log "ERROR: mysqldump failed, removing incomplete file"
  rm -f "$OUT_FILE"
  exit 1
fi

# Delete backups older than RETENTION_DAYS
find "$BACKUP_DIR" -name "lysius-backup-*.sql" -type f -mtime +"$RETENTION_DAYS" -delete
log "Cleaned up backups older than $RETENTION_DAYS days"
