<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ tariff.name }}</td>
    <td>{{ tariff.description }}</td>
    <td>{{ tariff.price + " hryvnias / " + tariff.duration + " days" }}</td>
    <td>
      <a class="custom-link" v-on:click="addTariff">Add to order</a>
    </td>
  </tr>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "TariffItem",
  props: {
    index: Number,
    tariff: Object
  },

  methods: {
    ...mapActions(['addTariffToOrder']),
    async addTariff() {
      if (await this.addTariffToOrder(this.tariff)) {
        this.$message('Tariff has been added to order');
      } else {
        this.$message('Tariff is already present in the order');
      }
    }
  }
}
</script>

<style scoped>

</style>