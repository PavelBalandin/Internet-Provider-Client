const URL = process.env.VUE_APP_URL;

export default {
    actions: {
        async fetchTariffs(context, service_id) {
            const res = await fetch(URL + '/tariffs/service/' + service_id);
            const tariffs = await res.json();
            context.commit('updateTariffs', tariffs);

        }
    },
    mutations: {
        updateTariffs(state, tariffs) {
            state.tariffs = tariffs
        }
    },
    state: {
        tariffs: []
    },
    getters: {
        getTariffs(state) {
            return state.tariffs;
        }
    }
}