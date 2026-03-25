import ru from "./locales/ru.json";
import en from "./locales/en.json";
import { createI18n } from "vue-i18n";
import { getLocale } from "@/help/language.js";

const lang = getLocale();

const i18n = createI18n({
    locale: lang,
    fallbackLocale: lang,
    globalInjection: true,
    legacy: false,
    messages: {
        ru, en
    }
});

export default i18n;