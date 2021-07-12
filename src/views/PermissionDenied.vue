<template>
  <div class="container">
    <div class="permission-title">
      <h1>Access denied</h1>
      <div class="line">
        <hr>
      </div>
      <p>You do not have permission to access this page</p>
      <router-link to="/">Return to home page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PermissionDenied"
}
</script>

<style scoped>

</style>