import axios from "axios";

const URL = process.env.VUE_APP_URL;

export default {
    actions: {
        async fetchUser(context, login) {
            const res = await fetch(URL + '/users/' + login);
            if (res.status === 200) {
                const user = await res.json();
                context.commit('updateUser', user);
            }
            return res.status;
        },

        async registerUser(context, user) {
            const res = await axios.post(URL + '/users', user);
            return res.status;
        },

        async updateUser(context, user) {
            const res = await axios.put(URL + '/users/' + user.id, user);
            return res.status;
        },
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        }
    },
    state: {
        user: Object,
        users: []
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    }
}