import axios from "axios";

const URL = process.env.VUE_APP_URL;

export default {
    actions: {
        async fetchTariffs(context, service_id) {
            const res = await fetch(URL + '/tariffs/service/' + service_id);
            const tariffs = await res.json();
            context.commit('updateTariffs', tariffs);

        },
        async fetchAllTariffs(context) {
            const res = await axios.get(URL + '/tariffs');
            const tariffs = await res.json();
            context.commit('updateTariffs', tariffs);

        },

        async fetchPaginatedTariffs(context) {
            const res = await axios.get(URL + '/tariffs', {params: context.state.option});
            const data = await res.data;
            context.commit('updatePage', data);
        },

        async createTariff(context, tariff) {
            const res = await axios.post(URL + '/tariffs', tariff);
            return res.status;
        },

        async updateTariff(context, tariff) {
            const res = await axios.put(URL + '/tariffs/' + +tariff.id, tariff);
            return res.status;
        },

        async deleteTariff(context, id) {
            const res = await axios.delete(URL + '/tariffs/' + id);
            return res.status;
        },

        async updatePaginationOption(context, option) {
            context.commit('updateOption', option);
        }

    },
    mutations: {
        updateTariffs(state, tariffs) {
            state.tariffs = tariffs
        },
        updatePage(state, page) {
            state.page = page
        },
        updateOption(state, option) {
            state.option = option;
        }
    },
    state: {
        tariffs: [],
        page: Object,
        option: {
            sort: 'price',
            order: 'ASC',
            size: 4,
            page: 0
        }
    },
    getters: {
        getTariffs(state) {
            return state.tariffs;
        },

        getPage(state) {
            return state.page;
        },

        getOption(state) {
            return state.option;
        }
    }
}