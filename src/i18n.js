import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(Cache)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng:"en",
    debug:true,
    interpolation:{
        escapeValue: false
    }
  });

  export default i18n;
