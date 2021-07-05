<template>
  <div class="edit-tariff">
    <TariffList/>
  </div>
</template>

<script>
import TariffList from "./TariffList";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "EditTariff",
  components: {TariffList},
  computed: mapGetters(["getTariffs", "getPage"]),
  methods: mapActions(['fetchAllTariffs', 'fetchPaginatedTariffs']),
}
</script>

<style scoped>

</style>