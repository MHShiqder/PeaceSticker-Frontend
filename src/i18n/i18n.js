import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en/translation.json";
import bnTranslation from "./bn/translation.json";
import arTranslation from "./ar/translation.json";
import deTranslation from "./de/translation.json";
import esTranslation from "./es/translation.json";
import frTranslation from "./fr/translation.json";
import jaTranslation from "./ja/translation.json";
import koTranslation from "./ko/translation.json";
import ruTranslation from "./ru/translation.json";
import zhTranslation from "./zh/translation.json";

// Get language from localStorage, fallback to "en" if not set
const lang = localStorage.getItem("lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      bn: { translation: bnTranslation },
      ar: { translation: arTranslation },
      de: { translation: deTranslation },
      es: { translation: esTranslation },
      fr: { translation: frTranslation },
      ja: { translation: jaTranslation },
      ko: { translation: koTranslation },
      ru: { translation: ruTranslation },
      zh: { translation: zhTranslation },
    },
    lng: lang, // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
