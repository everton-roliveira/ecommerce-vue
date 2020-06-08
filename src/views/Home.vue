<template>
  <section>
    <h1>Compre ou Venda</h1>
    <Search />
    <List />
  </section>
</template>

<script>
import Search from "@/components/product/Search";
import List from "@/components/product/List";

export default {
  name: "Home",
  components: {
    Search,
    List
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