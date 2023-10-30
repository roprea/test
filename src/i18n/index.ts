import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en';

i18next.use(LanguageDetector).use(initReactI18next).init({
  defaultNS: 'common',
  fallbackLng: 'en',
  lng: 'en',
  resources: { en },
  returnNull: false,
});

export default i18next;
