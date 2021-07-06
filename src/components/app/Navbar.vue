<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo"><img src="@/assets/image/logo.png" alt=""><span>Provider</span>
      </router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/services">Services</router-link>
        </li>
        <li v-if="user.roleList[0].name === 'ROLE_ADMIN'">
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <router-link v-if="user.roleList[0].name === 'ROLE_USER'" to="/user">User</router-link>
        </li>
        <li>
          <router-link v-if="user === null" to="/login">Log in</router-link>
        </li>
        <li v-if="user !== null">
          <a class="dropdown-trigger white-text"
             href="#"
             data-target="dropdown"
             ref="dropdown">{{ user.login }}<i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id='dropdown' class='dropdown-content'>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Exit
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
import user from "../../store/modules/user";

export default {
  name: "Navbar",
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$router.push('/login?message=logout')
    }
  },
  mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constraint: true
    })
  }
}
</script>

<style scoped>
.dropdown-content {
  top: 50px !important;
}
</style>