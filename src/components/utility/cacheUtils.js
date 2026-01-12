import { decryptData, encryptData } from "./crypto";


const DEFAULT_CACHE_EXPIRY = 15 * 60 * 1000;

/**
 * Store encrypted cache in localStorage with dynamic expiry
 * @param {string} key
 * @param {any} data
 * @param {number} expiryMs 
 */
export const setCache = (key, data, expiryMs = DEFAULT_CACHE_EXPIRY) => {
  const payload = {
    data: encryptData(data),
    timestamp: Date.now(),
    expiry: expiryMs, 
  };

  localStorage.setItem(key, JSON.stringify(payload));
};

/**
 * Get cache if not expired
 * @param {string} key
 */
export const getCache = (key) => {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const parsed = JSON.parse(cached);

  // ✅ If expiry is missing (old cache), use default expiry
  const expiryTime = parsed.expiry ?? DEFAULT_CACHE_EXPIRY;

  const isExpired = Date.now() - parsed.timestamp > expiryTime;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  try {
    return decryptData(parsed.data);
  } catch (error) {
    console.error("Decryption failed:", error);
    localStorage.removeItem(key);
    return null;
  }
};
