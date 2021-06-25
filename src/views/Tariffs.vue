<template>
  <div class="page-content">
    <table class="striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Order</th>
      </tr>
      </thead>
      <tbody>
      <TariffItem v-for="(tariff, index) in getTariffs"
                  v-bind:tariff="tariff"
                  v-bind:index="index+1"
      />
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TariffItem from "./TariffItem";

export default {
  name: "Tariffs",
  components: {TariffItem},
  computed: mapGetters(["getTariffs"]),
  methods: mapActions(['fetchTariffs']),
  async mounted() {
    this.fetchTariffs(this.$route.query.service_id);
  }
}
</script>

<style scoped>

</style>