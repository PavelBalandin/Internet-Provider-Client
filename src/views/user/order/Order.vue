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
    async sendOrder() {
      const status = await this.makeOrder();
      if (status === 201) {
        this.$message('Order has been created');
      } else if (status === 402) {
        this.$message('Not enough funds');
      } else if (status === 409) {
        this.$message('One of the tariffs has already been ordered');
      }
    }
  }
}
</script>

<style scoped>

</style>