import Vue from 'vue'
import Vuex from 'vuex'

import service from "./modules/service";
import tariff from "./modules/tariff";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        service, tariff
    }
})
