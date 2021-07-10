<template>
  <div class="tariff-table">
    <TariffList/>
    <div class="order-button">
      <button v-if="getOrder.length !== 0" class="btn-small" v-on:click="sendOrder">Order</button>
    </div>
  </div>
</template>

<script>
import TariffList from "./TariffList";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Order",
  components: {TariffList},
  computed: mapGetters(["getOrder"]),
  methods: {
    ...mapActions(['makeOrder']),
    sendOrder() {
      this.makeOrder();
    }
  }
}
</script>

<style scoped>

</style>