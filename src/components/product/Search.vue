<template>
  <form>
    <input type="text" name="searchValue" id="searchValue" v-model="searchValue" />
    <input type="submit" id="btnSearch" value="Buscar" @click.prevent="searchProducts" />
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.searchValue } });
    }
  }
};
</script>

<style>
</style>