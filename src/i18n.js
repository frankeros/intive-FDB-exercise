import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

const detectionOptions = {
  order: ['path'],
  lookupFromPathIndex: 0,
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    whitelist:['en','es','pt'],
    detection: detectionOptions,
    ns: ['translations'],
    defaultNS: 'translations',

    debug: false,

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true
    }
  });


export default i18n;
