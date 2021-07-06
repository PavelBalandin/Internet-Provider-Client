<template>
  <div class="user-update">
    <form class="find-form" @submit.prevent="addPayment">
      <div class="row">
        <div class="input-field col s12">
          <input id="input" type="text" class="validate" name="input" v-model:value="payment">
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

export default {
  name: "AddPayment",
  data() {
    return {
      payment: ''
    }
  },
  methods: {
    ...mapActions(['createPayment', 'fetchPayments']),
    async addPayment() {
      const status = await this.createPayment({
        payment: this.payment,
        user: {id: JSON.parse(localStorage.getItem('user')).id}
      });
      if (status === 201) {
        this.$message('Payment has been created');
        await this.fetchPayments();
        this.payment = ''
      }
    }

  }
}
</script>

<style scoped>

</style>