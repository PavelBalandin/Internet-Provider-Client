import axios from "axios";

const URL = process.env.VUE_APP_URL;

export default {
    actions: {
        async fetchPayments(context) {
            const res = await axios.get(URL + "/payments/user/" + JSON.parse(localStorage.getItem('user')).id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
            const payments = await res.data;
            context.commit('updatePayments', payments);
            return res.status;

        },
        async createPayment(context, payment) {
            const res = await axios.post(URL + "/payments", payment, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});

            return res.status;
        }
    },

    mutations: {
        updatePayments(state, payments) {
            state.payments = payments
        }
    },

    state: {
        payments: []
    },

    getters: {
        getPayments(state) {
            return state.payments;
        }
    }
}