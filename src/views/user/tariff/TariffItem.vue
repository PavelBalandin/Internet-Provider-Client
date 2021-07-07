<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ tariff.name }}</td>
    <td>{{ tariff.description }}</td>
    <td>{{ tariff.duration + " hryvnias / " + tariff.price + " days" }}</td>
    <td>{{ tariff.service.name }}</td>
  </tr>
</template>

<script>
export default {
  name: "TariffItem",
  props: {
    index: Number,
    tariff: Object
  }
}
</script>

<style scoped>

</style>