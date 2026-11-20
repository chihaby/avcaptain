// Simple in-memory limiter: 5 requests per 10 minutes per IP.
// Note: on serverless hosts each instance has its own memory, so this is a
// basic guard only. Add a shared store (for example Upstash Redis) if spam grows.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map();

export function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}
