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
