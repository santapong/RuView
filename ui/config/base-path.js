// Base-path aware helpers: UI may be served under a prefix (e.g. /ruview)
const _segments = (typeof window !== 'undefined' && window.location)
  ? window.location.pathname.split('/').filter(Boolean)
  : [];
// If page is /index.html or a known ui file at root, prefix is ''
const _NON_PREFIX = new Set(['ui']);
export const BASE_PATH = _segments.length && !_segments[0].includes('.') && !_NON_PREFIX.has(_segments[0]) ? '/' + _segments[0] : '';

export function withBase(p) {
  return BASE_PATH + p;
}
