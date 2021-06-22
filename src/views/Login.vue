<template>
  <div class="login">
    <form>
      <p class="center-align title">Login</p>
      <div class="row">
        <div class="input-field col s12">
          <input id="login" type="text" class="validate" name="login">
          <label for="login">Login</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" name="password">
          <label for="password">Password</label>
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
export default {
  name: "Login"
}
</script>

<style scoped>

</style>