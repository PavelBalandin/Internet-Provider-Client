<template>
  <div class="container">
    <table class="striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Service</th>
        <th>Tariffs</th>
      </tr>
      </thead>
      <tbody>
      <ServiceItem v-for="(service, index) in getServices"
                   v-bind:service="service"
                   v-bind:index="index+1"
      />
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceItem from "./ServiceItem";
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Services",
  components: {ServiceItem},
  computed: mapGetters(["getServices"]),
  methods: mapActions(['fetchServices']),
  async mounted() {
    await this.fetchServices();
  }
}
</script>

<style scoped>

</style>