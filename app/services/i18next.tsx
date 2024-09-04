import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import he from "../locales/he.json";

export const languageResources = {
  en: { translation: en },
  he: { translation: he },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "he",
  fallbackLng: "en",
  resources: languageResources,
});

export default i18next;
