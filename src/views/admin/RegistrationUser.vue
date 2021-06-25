<template>
  <form class="user-registration" @submit.prevent="submitHandler">
    <div class="row">
      <div class="input-field col s12">
        <input id="login" type="text"
               class="validate"
               name="login"
               v-model.trim="login"
               :class="{invalid: ($v.login.$dirty && !$v.login.required) || ($v.login.$dirty && !$v.login.minLength) || ($v.login.$dirty && !$v.login.maxLength)}"
        >
        <label for="login">Login</label>
        <small
            class="helper-text invalid"
            v-if="$v.login.$dirty && !$v.login.required"
        >You need to enter your Login</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.login.$dirty && !$v.login.minLength"
        >Your login must be 2 characters or more. Now is {{ login.length }}</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.login.$dirty && !$v.login.maxLength"
        >Your login must be no longer than 30 characters. Now is {{ login.length }}</small>
        <small
            class="helper-text invalid"
            v-else-if="alreadyInUse"
        >This login is already connected to an account</small>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="firstName" type="text"
               class="validate"
               name="firstName"
               v-model.trim="firstName"
               :class="{invalid: ($v.firstName.$dirty && !$v.firstName.required) || ($v.firstName.$dirty && !$v.firstName.minLength) || ($v.firstName.$dirty && !$v.firstName.maxLength)}"
        >
        <label for="firstName">First name</label>
        <small
            class="helper-text invalid"
            v-if="$v.firstName.$dirty && !$v.firstName.required"
        >You need to enter your first name</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.firstName.$dirty && !$v.firstName.minLength"
        >Your first name must be 2 characters or more. Now is {{ firstName.length }}</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.firstName.$dirty && !$v.firstName.maxLength"
        >Your first name must be no longer than 30 characters. Now is {{ firstName.length }}</small>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="lastName" type="text"
               class="validate"
               name="lastName"
               v-model.trim="lastName"
               :class="{invalid: ($v.lastName.$dirty && !$v.lastName.required) || ($v.lastName.$dirty && !$v.lastName.minLength) || ($v.lastName.$dirty && !$v.lastName.maxLength)}"
        >
        <label for="lastName">Last name</label>
        <small
            class="helper-text invalid"
            v-if="$v.lastName.$dirty && !$v.lastName.required"
        >You need to enter your last name</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.lastName.$dirty && !$v.lastName.minLength"
        >Your last name must be 2 characters or more. Now is {{ lastName.length }}</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.lastName.$dirty && !$v.lastName.maxLength"
        >Your Last name must be no longer than 30 characters. Now is {{ lastName.length }}</small>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input
            id="password"
            type="password"
            class="validate"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)|| ($v.password.$dirty && !$v.password.maxLength)}"
        >
        <label for="password">Password</label>
        <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
        >You need to enter your password</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Your password must be 6 characters or more. Now is {{ password.length }}</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.maxLength"
        >Your password must be no longer than 20 characters. Now is {{ password.length }}</small>
      </div>
    </div>
    <div class="row">
      <button class="btn waves-effect waves-light" type="submit" name="action">Register
        <i class="material-icons right">send</i>
      </button>
    </div>
  </form>
</template>

<script>
import {minLength, maxLength, required} from "vuelidate/lib/validators";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      login: '',
      firstName: '',
      lastName: '',
      password: '',
      alreadyInUse: false,
    }
  },
  validations: () => ({
    login: {required, minLength: minLength(2), maxLength: maxLength(30)},
    firstName: {required, minLength: minLength(2), maxLength: maxLength(30)},
    lastName: {required, minLength: minLength(2), maxLength: maxLength(30)},
    password: {required, minLength: minLength(2), maxLength: maxLength(30)}
  }),
  methods: {
    ...mapActions(['registerUser']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      } else {
        const status = await this.registerUser({
          login: this.login,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          role: {id: 1},
          status: {id: 1}
        });
        console.log(status)
        if (status === 201) {
          this.alreadyInUse = false
          this.login = ''
          this.firstName = ''
          this.lastName = ''
          this.password = ''
          this.$message('User has been successfully registered');
        } else {
          this.alreadyInUse = true
        }
      }
    }
  }
}
</script>

<style scoped>

</style>