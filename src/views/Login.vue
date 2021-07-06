<template>
  <div class="login">
    <form @submit.prevent="submitHandler">
      <p class="center-align title">Login</p>
      <div class="row">
        <div class="input-field">
          <input
              id="name"
              type="text"
              class="validate"
              v-model.trim="username"
              :class="{invalid: ($v.username.$dirty && !$v.username.required) || ($v.username.$dirty && !$v.username.minLength) || ($v.username.$dirty && !$v.username.maxLength)}"
          >
          <label for="name">Login</label>
          <small
              class="helper-text invalid"
              v-if="$v.username.$dirty && !$v.username.required"
          >You need to enter your username</small>
          <small
              class="helper-text invalid"
              v-else-if="$v.username.$dirty && !$v.username.minLength"
          >Your username must be 2 characters or more. Now is {{ username.length }}</small>
          <small
              class="helper-text invalid"
              v-else-if="$v.username.$dirty && !$v.username.maxLength"
          >Your username must be no longer than 20 characters. Now is {{ username.length }}</small>
        </div>
      </div>
      <div class="row">
        <div class="input-field">
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
          >Your password must be 4 characters or more. Now is {{ password.length }}</small>
          <small
              class="helper-text invalid"
              v-else-if="$v.password.$dirty && !$v.password.maxLength"
          >Your password must be no longer than 20 characters. Now is {{ password.length }}</small>
          <small
              class="helper-text invalid"
              v-else-if="incorrect"
          >Incorrect username or password</small>
        </div>
      </div>
      <div class="row">
        <button class="btn waves-effect waves-light" type="submit" name="action">Log in
        </button>
      </div>
      <router-link to="/">Home</router-link>
    </form>
  </div>
</template>

<script>

import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      incorrect: false
    }
  },
  validations: () => ({
    username: {required, minLength: minLength(2), maxLength: maxLength(20)},
    password: {required, minLength: minLength(4), maxLength: maxLength(20)}
  }),
  methods: {
    ...mapActions(['loginUser']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        try {
          const status = await this.loginUser({login: this.username, password: this.password});
          if (status === 200) {
            this.incorrect = false;
            await this.$router.push('/');
          }
        } catch (e) {
          this.incorrect = true
        }
      }
    }
  }
}
</script>

<style scoped>

</style>