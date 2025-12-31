import { decryptData, encryptData } from "./crypto";

const CACHE_EXPIRY = 15 * 60 * 1000; // 15 minutes

export const setCache = (key, data) => {
  const payload = {
    data : encryptData(data),
    timestamp: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getCache = (key) => {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const parsed = JSON.parse(cached);
  const isExpired = Date.now() - parsed.timestamp > CACHE_EXPIRY;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  try{
    return decryptData(parsed.data);
  }catch(error){
    console.error("Decryption failed:", error);
    localStorage.removeItem(key);
    return null;
  }
};
