<template>
  <div class="tariff-list">
    <AddPayment/>
    <PaymentList/>
  </div>
</template>

<script>
import PaymentList from "./PaymentList";
import AddPayment from "./AddPayment";

export default {
  name: "Payments",
  components: {AddPayment, PaymentList},
}
</script>

<style scoped>

</style>