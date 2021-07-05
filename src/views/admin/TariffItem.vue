<template>
  <tr>
    <td>{{ index }}</td>
    <td><input type="text" v-model:value="tariff.name"></td>
    <td><input type="text" v-model:value="tariff.description"></td>
    <td><input type="text" v-model:value="tariff.duration"></td>
    <td><input type="text" v-model:value="tariff.price"></td>
    <td>
      <select v-model="tariff.service">
        <option v-bind:value="item" v-for="item in getServices">{{ item.name }}</option>
      </select>
    </td>
    <td>
      <button class="btn-small waves-effect waves-light" v-on:click="update">Update</button>
    </td>
    <td>
      <button class="btn-small waves-effect waves-light" v-on:click="deleteItem">Delete</button>
    </td>
  </tr>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import tariff from "../../store/modules/tariff";

export default {
  name: "TariffItem",
  props: {
    index: Number,
    tariff: Object
  },
  computed: mapGetters(["getServices"]),

  methods: {
    ...mapActions(['updateTariff', 'deleteTariff', 'fetchPaginatedTariffs']),
    async update() {
      const status = await this.updateTariff(this.tariff);
      await this.fetchPaginatedTariffs();
    },
    async deleteItem() {
      const status = await this.deleteTariff(this.tariff.id);
      await this.fetchPaginatedTariffs();
    },
  }
}
</script>

<style scoped>

</style>