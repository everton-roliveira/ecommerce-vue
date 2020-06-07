<template>
  <section>
    <article class="product" v-for="product in products" :key="product.id">
      <img src alt />
      <h2 class="product__name">{{product.name}}</h2>
      <p class="product__price">{{product.price}}</p>
      {{url}}
    </article>
  </section>
</template>

<script>
import { productService } from "@/services/product";
export default {
  name: "List",
  data() {
    return {
      products: []
    };
  },
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }

      return `/product?_limit=10${queryString}`;
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