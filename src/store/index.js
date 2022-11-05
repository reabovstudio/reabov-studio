import Vuex from 'vuex';
import translate from './translate.module';
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        translate
    }
})