import store from "@/store/index.js";

function setTheme(isLightTheme) {
    const htmlElement = document.documentElement;

    if (isLightTheme) {
        localStorage.setItem("theme", "light");
        htmlElement.setAttribute("data-theme", "light");
        store.commit("setTheme", "light");
    }
    else {
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute("data-theme", "dark");
        store.commit("setTheme", "dark");
    }
}

export function initTheme() {
    const theme = localStorage.getItem("theme") ?? "dark";
    setTheme(theme === "light");
}

export function switchTheme() {
    setTheme(!(localStorage.getItem("theme") === "light"));
}