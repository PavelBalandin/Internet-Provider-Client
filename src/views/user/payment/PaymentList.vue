<template>
  <table class="striped">
    <thead>
    <tr>
      <th></th>
      <th>Payment</th>
      <th>Date</th>
    </tr>
    </thead>
    <tbody>
    <PaymentItem v-for="(payment, index) in getPayments"
                 v-bind:payment="payment"
                 v-bind:index="index+1"
    />
    </tbody>
    <tr>
      <td>Total</td>
      <td>{{ getPayments.map(obj => obj.payment).reduce((a, b) => a + b, 0) }}</td>
    </tr>
  </table>
</template>

<script>
import PaymentItem from "./PaymentItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PaymentList",
  data() {
    return {
      sum: 0
    }
  },
  components: {PaymentItem},
  computed: mapGetters(["getPayments"]),
  methods: mapActions(['fetchPayments']),
  async mounted() {
    this.fetchPayments();
  }
}
</script>

<style scoped>

</style>