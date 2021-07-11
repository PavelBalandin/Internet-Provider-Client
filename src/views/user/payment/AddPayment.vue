<template>
  <div class="user-update">
    <form class="find-form" @submit.prevent="addPayment">
      <div class="row">
        <div class="input-field col s12">
          <input id="input" type="text" class="validate" name="input" v-model.trim="payment">
          <small v-if="invalid !== null" class="helper-text invalid">{{ invalid }}</small>
          <label for="input">Payment</label>
        </div>
      </div>
      <div class="row row-button">
        <button class="btn-small waves-effect waves-light" type="submit" name="action">Create
          <i class="material-icons right">send</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import v from "../../../utils/validation";

export default {
  name: "AddPayment",
  data() {
    return {
      payment: '',
      invalid: null
    }
  },
  methods: {
    ...mapActions(['createPayment', 'fetchPayments']),
    async addPayment() {
      if (!v.validate(v.reg.payment, this.payment)) {
        this.invalid = "Fill the field correctly";
      } else {
        this.invalid = null
      }
      if (this.invalid == null) {
        const status = await this.createPayment({
          payment: this.payment,
          user: {id: JSON.parse(localStorage.getItem('user')).id}
        });
        if (status === 201) {
          this.$message('Payment has been created');
          await this.fetchPayments();
          this.payment = ''
        }else {
          this.$message('Something went wrong');
        }
      }
    }
  }
}
</script>

<style scoped>

</style>