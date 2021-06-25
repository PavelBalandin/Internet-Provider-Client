import axios from "axios";

const URL = process.env.VUE_APP_URL;

export default {
    actions: {
        async fetchUsers(context, service_id) {
            const res = await fetch(URL + '/users');
            const users = await res.json();
            context.commit('updateUsers', users);

        },

        async registerUser(context, user) {
            const res = await axios.post(URL + '/users', user);
            return res.status;
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        }
    },
    state: {
        users: []
    },
    getters: {
        getUsers(state) {
            return state.users;
        }
    }
}