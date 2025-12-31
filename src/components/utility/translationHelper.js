// utils/translationHelper.js

const translationCache = new Map();

const translateText = async (text, targetLang) => {
  const res = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      source: "en",
      target: targetLang,
      format: "text",
    }),
  });

  const data = await res.json();
  return data?.translatedText || text;
};

export const getTranslatedText = async (text, lang) => {
  if (lang === "en") return text;

  const cacheKey = `${lang}_${text}`;

  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }

  const translated = await translateText(text, lang);
  translationCache.set(cacheKey, translated);

  return translated;
};
