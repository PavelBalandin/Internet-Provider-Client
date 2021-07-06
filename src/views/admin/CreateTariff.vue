<template>
  <tr>
    <td></td>
    <td><input type="text" v-model:value="tariff.name"></td>
    <td><input type="text" v-model:value="tariff.description"></td>
    <td><input type="text" v-model:value="tariff.duration"></td>
    <td><input type="text" v-model:value="tariff.price"></td>
    <td>
      <select v-model="tariff.service">
        <option v-bind:value="item" v-for="item in getServices">{{ item.name }}</option>
      </select>
    </td>
    <td colspan="2">
      <button class="btn-small waves-effect waves-light create-button" v-on:click="create">Create</button>
    </td>
  </tr>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreateTariff",
  data() {
    return {
      tariff: {
        name: '',
        description: '',
        duration: '',
        price: '',
        service: Object
      },
    }
  },
  computed: mapGetters(["getServices"]),
  methods: {
    ...mapActions(['fetchServices', 'createTariff', 'fetchPaginatedTariffs']),
    async create() {
      const status = await this.createTariff(this.tariff);
      this.tariff.name = '';
      this.tariff.description = '';
      this.tariff.duration = '';
      this.tariff.price = '';
      this.tariff.service= '';
      await this.fetchPaginatedTariffs();
    }
  },
  mounted() {
    this.fetchServices();
  },
}
</script>

<style scoped>

</style>