import i18n from 'i18next';
import enTranslations from './locale/en.json';
import ptTranslations from './locale/pt.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en: { translation: enTranslations },
    pt: { translation: ptTranslations },
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;