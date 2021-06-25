const URL = process.env.VUE_APP_URL;

export default {
    actions: {
        async fetchServices(context) {
            const res = await fetch(URL + "/services");
            const services = await res.json();
            context.commit('updateServices', services);

        }
    },
    mutations: {
        updateServices(state, services) {
            state.services = services
        }
    },
    state: {
        services: []
    },
    getters: {
        getServices(state) {
            return state.services;
        }
    }
}