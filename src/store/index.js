import Vue from 'vue'
import Vuex from 'vuex'

import service from "./modules/service";
import tariff from "./modules/tariff";
import user from "./modules/user"
import payment from "./modules/payment"
import order from "./modules/order"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        service, tariff, user, payment, order
    }
})
