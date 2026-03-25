import { createStore } from "vuex";

export default createStore({
    state: {
        theme: "",
        language: ""
    },

    getters: {
        theme: state => {
            return state.theme;
        },
        language: state => {
            return state.language;
        }
    },

    mutations: {
        setTheme(state, value) {
            state.theme = value;
        },
        setLanguage(state, value) {
            state.language = value;
        }
    }
})