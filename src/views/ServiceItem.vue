<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ service.name }}</td>
    <td>
      <router-link v-bind:to="'/tariffs?service_id=' + service.id">More</router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ServiceItem",
  props: {
    index: Number,
    service: Object
  }
}

</script>

<style scoped>

</style>