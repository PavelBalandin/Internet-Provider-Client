<template>
  <div class="page-content">
    <table class="striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Service</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <TariffItem v-for="(tariff, index) in getOrder"
                  v-bind:tariff="tariff"
                  v-bind:index="index+1"
      />
      </tbody>
    </table>
  </div>
</template>

<script>
import TariffItem from "./TariffItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TariffList",
  components: {TariffItem},
  computed: mapGetters(["getOrder"]),
}
</script>

<style scoped>

</style>