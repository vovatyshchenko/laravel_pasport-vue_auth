import Vue from 'vue';
import Vuex from 'vuex';

import User from './modules/user';
import Common from './modules/common';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        User,
        Common
    }
});