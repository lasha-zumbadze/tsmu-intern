import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/languages/en.json";
import ge from "../assets/languages/ge.json";

const resources = {
  en: {
    translation: en,
  },
  ge: {
    translation: ge,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
