<template>
  <tr>
    <td></td>
    <td>
      <input type="text" v-model.trim="tariff.name">
      <div class="error-container">
        <small v-if="invName !== null" class="helper-text invalid">{{ invName }}</small>
      </div>
    </td>
    <td>
      <input type="text" v-model.trim="tariff.description">
      <div class="error-container">
        <small v-if="invDescription !== null" class="helper-text invalid">{{ invDescription }}</small>
      </div>
    </td>
    <td>
      <input type="text" v-model.trim="tariff.duration">
      <div class="error-container">
        <small v-if="invDuration !== null" class="helper-text invalid">{{ invDuration }}</small>
      </div>
    </td>
    <td>
      <input type="text" v-model.trim="tariff.price">
      <div class="error-container">
        <small v-if="invPrice !== null" class="helper-text invalid">{{ invPrice }}</small>
      </div>
    </td>
    <td>
      <select v-model="tariff.service">
        <option v-bind:value="item" v-for="item in getServices">{{ item.name }}</option>
      </select>
      <div class="error-container">
        <small v-if="invService !== null" class="helper-text invalid">{{ invService }}</small>
      </div>
    </td>
    <td colspan="2">
      <button class="btn-small waves-effect waves-light create-button" v-on:click="create">Create</button>
    </td>
  </tr>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import v from "../../utils/validation";

export default {
  name: "CreateTariff",
  data() {
    return {
      tariff: {
        name: '',
        description: '',
        duration: '',
        price: '',
        service: null
      },
      invName: null,
      invDescription: null,
      invDuration: null,
      invPrice: null,
      invService: null
    }
  },
  computed: mapGetters(["getServices"]),
  methods: {
    ...mapActions(['fetchServices', 'createTariff', 'fetchPaginatedTariffs']),
    async create() {
      if (!v.validate(v.reg.name, this.tariff.name)) {
        this.invName = "Fill the field correctly"
      } else {
        this.invName = null;
      }

      if (!v.validate(v.reg.description, this.tariff.description)) {
        this.invDescription = "Fill the field correctly"
      } else {
        this.invDescription = null;
      }

      if (!v.validate(v.reg.duration, this.tariff.duration)) {
        this.invDuration = "Fill the field correctly"
      } else {
        this.invDuration = null;
      }

      if (!v.validate(v.reg.payment, this.tariff.price)) {
        this.invPrice = "Fill the field correctly"
      } else {
        this.invPrice = null;
      }

      if (this.tariff.service == null) {
        this.invService = "Select a service"
      } else {
        this.invService = null;
      }

      if (this.invName == null && this.invDescription == null &&
          this.invDuration == null && this.invPrice == null &&
          this.invService == null) {
        const status = await this.createTariff(this.tariff);
        this.tariff.name = '';
        this.tariff.description = '';
        this.tariff.duration = '';
        this.tariff.price = '';
        this.tariff.service = null;
        await this.fetchPaginatedTariffs();
      }
    }
  },
  mounted() {
    this.fetchServices();
  },
}
</script>

<style scoped>

</style>