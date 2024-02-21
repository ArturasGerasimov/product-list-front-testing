import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "../locales/en/translation.json"
import lt from "../locales/lt/translation.json"
import ua from "../locales/ua/translation.json"
import Cookies from "js-cookie"

i18n
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false
    },
    resources: {
      en: {
        translation: en
      },
      lt: {
        translation: lt
      },
      ua: {
        translation: ua
      }
    },
    lng: Cookies.get("lang") ? Cookies.get("lang") : "lt",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

// react: {
//   useSuspense: false
// },
// lng: Cookies.get('lng') ? Cookies.get('lng') : 'lt',
//   debug: isDev(),
//   keySeparator: '.',
//   interpolation: {
//   escapeValue: false,
// }
