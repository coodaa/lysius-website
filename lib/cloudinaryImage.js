const UPLOAD_MARKER = "/upload/";

export function isCloudinaryUrl(url) {
  return typeof url === "string" && url.includes("res.cloudinary.com") && url.includes(UPLOAD_MARKER);
}

function withTransform(url, transform) {
  if (!isCloudinaryUrl(url)) return url;
  return url.replace(UPLOAD_MARKER, `${UPLOAD_MARKER}${transform}/`);
}

// Single optimized URL at one width (auto format + quality).
export function cloudinarySrc(url, width) {
  if (!url) return url;
  return withTransform(url, `f_auto,q_auto,w_${width}`);
}

// srcSet string across several widths, for use on a plain <img>/<source>.
export function cloudinarySrcSet(url, widths) {
  if (!isCloudinaryUrl(url)) return undefined;
  return widths.map((w) => `${cloudinarySrc(url, w)} ${w}w`).join(", ");
}

// Derives a human-readable label from a Cloudinary filename, e.g.
// ".../senatsverwaltung_fuer_kultur_jegwyf.png" -> "Senatsverwaltung Fuer Kultur".
// Strips the trailing Cloudinary-generated random suffix when present.
export function cloudinaryFilenameLabel(url, fallback) {
  if (!isCloudinaryUrl(url)) return fallback;
  const filename = url.split("/").pop()?.split(".")[0];
  if (!filename) return fallback;
  const parts = filename.split(/[_-]/).filter(Boolean);
  if (parts.length > 1 && /^[a-z0-9]{6,8}$/i.test(parts[parts.length - 1])) {
    parts.pop();
  }
  const label = parts.join(" ").trim();
  return label || fallback;
}
