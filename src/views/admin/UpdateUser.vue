<template>
  <div class="user-update">
    <FindUser/>
    <form class="update-form" action="" v-if="getUser !== null" @submit.prevent="upUser">
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Login</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Role</th>
          <th>Status</th>
          <th></th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>{{ getUser.id }}</td>
          <td>{{ getUser.login }}</td>
          <td>
            <input name="firstName" type="text" v-model.trim="getUser.firstName">
            <div class="error-container">
              <small v-if="error.firstName !== null" class="helper-text invalid">{{ error.firstName }}</small>
            </div>
          </td>
          <td>
            <input name="lastName" type="text" v-model.trim="getUser.lastName">
            <div class="error-container">
              <small v-if="error.lastName !== null" class="helper-text invalid">{{ error.lastName }}</small>
            </div>
          </td>
          <td>{{ getUser.roleList[0].name }}</td>
          <td>
            <select v-model="getUser.status.id">
              <option v-bind:value="1" v-bind:selected="getUser.status.id === 1">Enable</option>
              <option v-bind:value="2" v-bind:selected="getUser.status.id === 2">Disable</option>
            </select>
          </td>
          <td>
            <button class="btn waves-effect waves-light" type="submit" name="action">Update
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import FindUser from "./FindUser";
import v from "../../utils/validation";

export default {
  name: "Update",
  components: {FindUser},
  computed: mapGetters(["getUser"]),
  data() {
    return {
      error: {
        firstName: null,
        lastName: null,
      }
    }
  },
  methods: {
    ...mapActions(['wipeUser', 'updateUser']),
    async upUser() {
      if (!v.validate(v.reg.name, this.getUser.firstName)) {
        this.error.firstName = "Fill the field correctly"
      } else {
        this.error.firstName = null
      }
      if (!v.validate(v.reg.name, this.getUser.lastName)) {
        this.error.lastName = "Fill the field correctly"
      } else {
        this.error.lastName = null
      }

      if (this.error.firstName == null && this.error.lastName == null) {
        const status = await this.updateUser(this.getUser);
        if (status === 200) {
          this.$message('User has been successfully updated');
          this.wipeUser();
        } else {
          this.$message('Something went wrong');
        }
      }
    }
  }
}
</script>

<style scoped>

</style>