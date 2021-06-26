<template>
  <div class="user-update">
    <form class="find-form" @submit.prevent="findUser">
      <div class="row">
        <div class="input-field col s12">
          <input id="input" type="text"
                 class="validate"
                 name="input"
                 v-model.trim="input"
                 :class="{invalid: ($v.input.$dirty && !$v.input.required) || ($v.input.$dirty && !$v.input.minLength) || ($v.input.$dirty && !$v.input.maxLength)}"
          >
          <label for="input">Login</label>
          <small
              class="helper-text invalid"
              v-if="$v.input.$dirty && !$v.input.required"
          >You need to enter login</small>
          <small
              class="helper-text invalid"
              v-else-if="$v.input.$dirty && !$v.input.minLength"
          >Login must be 2 characters or more. Now is {{ input.length }}</small>
          <small
              class="helper-text invalid"
              v-else-if="$v.input.$dirty && !$v.input.maxLength"
          >Login must be no longer than 30 characters. Now is {{ input.length }}</small>
        </div>
      </div>
      <div class="row row-button">
        <button class="btn waves-effect waves-light" type="submit" name="action">Find
          <i class="material-icons right">send</i>
        </button>
      </div>
    </form>
    <form class="update-form" action="" v-if="user !== null" @submit.prevent="upUser">
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
          <td>{{ user.id }}</td>
          <td>{{ user.login }}</td>
          <td><input name="firstName" type="text" v-model:value="user.firstName"></td>
          <td><input name="lastName" type="text" v-model:value="user.lastName"></td>
          <td>{{ user.role.name }}</td>
          <td>
            <select v-model="user.status.id">
              <option v-bind:value="1" v-bind:selected="user.status.id === 1">Enable</option>
              <option v-bind:value="2" v-bind:selected="user.status.id === 2">Disable</option>
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
import {mapGetters, mapActions} from 'vuex'
import {maxLength, minLength, required} from "vuelidate/lib/validators";
import user from "../../store/modules/user";

export default {
  name: "Update",
  data() {
    return {
      input: '',
      user: null,
    }
  },
  validations: () => ({
    input: {required, minLength: minLength(2), maxLength: maxLength(30)}
  }),
  computed: mapGetters(["getUser"]),
  methods: {
    ...mapActions(['fetchUser', 'updateUser']),
    async findUser() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        const status = await this.fetchUser(this.input);
        if (status === 200) {
          this.user = this.getUser;
        }else{
          this.$message('User hasn\'t been founded');
        }
      }
    },

    async upUser() {
      const status = await this.updateUser(this.user);
      if (status === 200) {
        this.$message('User has been successfully updated');
      } else {
        this.$message('Something gonna wrong');
      }
    }
  }
}
</script>

<style scoped>

</style>