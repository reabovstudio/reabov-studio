const state = () => ({
    language: JSON.parse(localStorage.getItem('language'))
})

const getters = {
    getLanguage(state) {
        return state.language;
    }
}

const actions = {
    setLanguage({commit}, languageValue) {
        commit('CHANGE_LANGUAGE', languageValue);
    }
}

const mutations = {
    CHANGE_LANGUAGE(state, languageValue) {
        state.language = languageValue;
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}