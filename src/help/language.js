import store from "@/store/index.js";
import i18n from "@/localization/localization.js";

export function getLocale() {
    const lang = localStorage.getItem("language") ?? "en";
    store.commit("setLanguage", lang);
    return lang;
}

export function setLocale(lang) {
    store.commit("setLanguage", lang.toLowerCase());
    localStorage.setItem("language", lang.toLowerCase());
    i18n.global.locale.value = lang.toLowerCase();
}