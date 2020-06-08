<template>
  <form>
    <input
      type="text"
      name="searchValue"
      id="searchValue"
      v-model="searchValue"
      placeholder="Buscar"
    />
    <input type="submit" id="SearchBtn" value="Buscar" @click.prevent="searchProducts" />
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

<style scoped lang="scss">
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
  #searchValue {
    width: 100%;
    border: none;
    padding: 20px;
    &:focus,
    &:hover {
      transform: scale(1.1);
    }
  }
  #SearchBtn {
    width: 62px;
    height: 62px;
    background: url("../../assets/images/search.svg") no-repeat center center;
    cursor: pointer;
    border: none;
    text-indent: -150px;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
  }
}
</style>