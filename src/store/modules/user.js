import axios from "axios";

const URL = process.env.VUE_APP_URL;
const HOST = process.env.VUE_APP_HOST;


export default {
    actions: {
        async fetchUser(context, login) {
            const res = await axios.get(URL + '/users/' + login, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
            if (res.status === 200) {
                context.commit('updateUser', res.data);
            }
            return res.status;
        },

        async registerUser(context, user) {
            return await axios.post(HOST + '/register', user, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                .then(function (response) {
                    return response.status;
                }).catch(function (error) {
                    return error.response.status;
                });
        },

        async updateUser(context, user) {
            const res = await axios.put(URL + '/users/' + user.id, user, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
            return res.status;
        },

        wipeUser(context) {
            context.commit('updateUser', null);
        },

        async loginUser(context, authUser) {
            const res = await axios.post(HOST + '/auth', authUser);
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('token', res.data.token);
            }
            return res.status;
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        }
    },
    state: {
        user: null,
        users: []
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    }
}