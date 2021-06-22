<template>
  <div class="page-content">
    <Sidebar v-bind:links="links"/>
    <div class="box-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/app/Sidebar";

export default {
  name: "User",
  components: {Sidebar},
  data() {
    return {
      links: [
        {title: 'Order', url: '/user/order', exact: true},
        {title: 'Tariffs', url: '/user/tariffs'},
        {title: 'AddPayment', url: '/user/add-payment'},
        {title: 'Payments', url: '/user/payments'},
      ]
    }
  }
}
</script>

<style scoped>

</style>