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
  name: "Admin",
  components: {Sidebar},
  data() {
    return {
      links: [
        {title: 'Register', url: '/admin/registration', exact: true},
        {title: 'Update', url: '/admin/update'},
        {title: 'Edit', url: '/admin/edit'},
      ]
    }
  }
}
</script>

<style scoped>

</style>