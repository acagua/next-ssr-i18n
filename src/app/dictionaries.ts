import "server-only";

const locales = ["en", "es"] as const;

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: (typeof locales)[number]) => {
  if (!locales.includes(locale)) {
    return dictionaries.en() as Promise<Record<string, string>>;
  }
  return dictionaries[locale]() as Promise<Record<string, string>>;
};
