<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ tariff.name }}</td>
    <td>{{ tariff.description }}</td>
    <td>{{ tariff.price + " hryvnias / " + tariff.duration + " days" }}</td>
    <td>{{ tariff.service.name }}</td>
    <td>
      <button class="btn-small" v-on:click="removeTariff">remove</button>
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
    ...mapActions(['removeTariffFromOrder']),
    removeTariff() {
      this.removeTariffFromOrder(this.tariff);
    }
  }
}
</script>

<style scoped>

</style>