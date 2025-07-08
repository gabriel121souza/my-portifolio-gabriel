// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Tipagem para as traduções
interface Resources {
  header: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    hello: string;
    developer: string;
    description: string;
    projects: string;
    contact: string;
  };
}

// Importações de traduções
import ptTranslations from './locales/pt.json';
import enTranslations from './locales/en.json';

// Configuração tipada
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: ptTranslations as Resources,
      en: enTranslations as Resources
    },
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    ns: ['header', 'hero'],
    defaultNS: 'header',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;