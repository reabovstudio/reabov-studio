import Vuex from 'vuex';
import theme from './theme.module';
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        theme
    }
})