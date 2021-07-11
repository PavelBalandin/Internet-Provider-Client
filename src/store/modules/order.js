import axios from "axios";

const URL = process.env.VUE_APP_URL;

export default {
    actions: {
        addTariffToOrder({commit, getters}, tariff) {
            if (!getters.getOrder.includes(tariff)) {
                commit('pushToOrder', tariff);
                return true;
            }
            return false;
        },

        wipeOrder(context) {
            context.commit('wipeOrder');
        },

        removeTariffFromOrder(context, tariff) {
            context.commit('removeOrder', tariff);
        },

        async makeOrder(context) {
            const res = await axios.post(URL + "/tariffs/order", context.state.order, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
            if (res.status === 201) {
                context.commit('wipeOrder');
            }
            return res;
        }
    },

    mutations: {
        pushToOrder(state, tariff) {
            state.order.push(tariff);
        },

        removeOrder(state, tariff) {
            const index = state.order.indexOf(tariff);
            if (index > -1) {
                state.order.splice(index, 1);
            }
        },

        wipeOrder(state) {
            state.order = [];
        }
    },

    state: {
        order: []
    },

    getters: {
        getOrder(state) {
            return state.order;
        }
    }
}