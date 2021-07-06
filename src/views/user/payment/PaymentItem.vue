<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ payment.payment }}</td>
    <td>{{ payment.created }}</td>
  </tr>
</template>

<script>
export default {
  name: "PaymentItem",
  props: {
    index: Number,
    payment: Object
  },
}
</script>

<style scoped>

</style>