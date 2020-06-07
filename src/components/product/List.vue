<template>
  <section>
    <article class="product" v-for="product in products" :key="product.id">
      <img src alt />
      <h2 class="product__name">{{product.name}}</h2>
      <p class="product__price">{{product.price}}</p>
    </article>
  </section>
</template>

<script>
import { productService } from "@/services/product";
import { serialize } from "@/helpers";

export default {
  name: "List",
  data() {
    return {
      products: [],
      productsPerPage: 9
    };
  },
  computed: {
    url() {
      let queryString = serialize(this.$route.query);
      return `/product?_limit=${this.productsPerPage}${queryString}`;
    }
  },
  methods: {
    getAllProducts() {
      productService
        .getAllProducts(this.url)
        .then(products => (this.products = products));
    }
  },
  watch: {
    url() {
      this.getAllProducts();
    }
  },
  created() {
    this.getAllProducts();
  }
};
</script>

<style>
</style>