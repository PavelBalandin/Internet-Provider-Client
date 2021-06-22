<template>
  <div>
    <Navbar/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/app/Navbar";

export default {
  name: "MainLayout",
  components: {Navbar}
}
</script>

<style scoped>

</style>