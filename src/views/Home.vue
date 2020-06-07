<template>
  <section>
    <h1>Compre ou Venda</h1>
    <Search />
    <List />
  </section>
</template>

<script>
import List from "@/components/product/Search";
import Search from "@/components/product/List";

export default {
  name: "Home",
  components: {
    List,
    Search
  }
};
</script>
<style scoped lang="scss">
h1 {
  @include font-size(max);
  color: color(brand, primary);
  text-align: center;
}
</style>