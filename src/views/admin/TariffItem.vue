<template>
  <tr>
    <td>{{ index }}</td>
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
    </td>
    <td>
      <button class="btn-small waves-effect waves-light" v-on:click="update">Update</button>
    </td>
    <td>
      <button class="btn-small waves-effect waves-light" v-on:click="deleteItem">Delete</button>
    </td>
  </tr>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import v from "../../utils/validation";

export default {
  name: "TariffItem",
  data() {
    return {
      invName: null,
      invDescription: null,
      invDuration: null,
      invPrice: "",
    }
  },
  props: {
    index: Number,
    tariff: Object,
  },
  computed: mapGetters(["getServices"]),

  methods: {
    ...mapActions(['updateTariff', 'deleteTariff', 'fetchPaginatedTariffs']),
    async update() {
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

      if (this.invName == null && this.invDescription == null && this.invDuration == null && this.invPrice == null) {
        const status = await this.updateTariff(this.tariff);
        await this.fetchPaginatedTariffs();
      }
    },
    async deleteItem() {
      const status = await this.deleteTariff(this.tariff.id);
      await this.fetchPaginatedTariffs();
    },
  }
}
</script>

<style scoped>

</style>