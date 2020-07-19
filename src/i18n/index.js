import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources, languages } from "./locales"
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStoragePlugin from 'i18next-react-native-async-storage'

// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const STORAGE_KEY = "@selectedLanguage"

i18n
    .use(initReactI18next)
    .use(AsyncStoragePlugin())
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        resources,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

i18n.languages = languages.map(l => l.code)


const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode, () => {
        console.log("change success");
        AsyncStorage.setItem(STORAGE_KEY, langCode).catch(console.log)
    })
}

const getSavedLanguage = () => {
    return AsyncStorage.getItem(STORAGE_KEY)
}

const getSelectedLanguage = () => {
    return i18n.language;
}

export default i18n;

export { languages, changeLanguage, getSavedLanguage, getSelectedLanguage }