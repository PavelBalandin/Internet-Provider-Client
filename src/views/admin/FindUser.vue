<template>
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
</template>

<script>
import {maxLength, minLength, required} from "vuelidate/lib/validators";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FindUser",
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
    ...mapActions(['fetchUser']),
    async findUser() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        try {
          const status = await this.fetchUser(this.input);
          if (status === 200) {
            this.user = this.getUser;
          }
        } catch (e) {
          this.$message('User hasn\'t been founded');
        }
      }
    },
  }
}
</script>

<style scoped>

</style>