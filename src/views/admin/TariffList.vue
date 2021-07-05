<template>
  <div class="tariff-list">
    <div class="options">
      <select v-model="option.order" v-on:click="changePage(option.page)">
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>

      <select v-model="option.size" v-on:click="changePage(option.page)">
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
      </select>

      <select v-model="option.sort" v-on:click="changePage(option.page)">
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
    <table class="striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Price</th>
        <th>Service</th>
        <th>Function</th>
      </tr>
      </thead>
      <tbody>
      <TariffItem v-for="(tariff, index) in getPage.content"
                  v-bind:tariff="tariff"
                  v-bind:index="index+1"
      />
      <CreateTariff/>
      </tbody>
    </table>
    <ul class="pagination">
      <li class="waves-effect" v-for="i in getPage.totalPages" v-bind:class="{active: i === getPage.number+1}">
        <a v-on:click="changePage(i-1)">
          {{ i }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TariffItem from "./TariffItem";
import CreateTariff from "./CreateTariff";

export default {
  name: "TariffList",
  components: {CreateTariff, TariffItem},
  data() {
    return {
      option: {
        sort: 'price',
        order: 'ASC',
        size: 4,
        page: 0
      }
    }
  },
  computed: mapGetters(["getTariffs", "getPage", "getServices"]),
  methods: {
    ...mapActions(['fetchAllTariffs', 'fetchPaginatedTariffs', 'fetchServices', 'updatePaginationOption']),
    changePage(page) {
      this.option.page = page;
      this.updatePaginationOption(this.option);
      this.fetchPaginatedTariffs();
    }
  },
  mounted() {
    this.fetchPaginatedTariffs();
    this.fetchServices();
  }

}
</script>

<style scoped>

</style>