<template>
  <div class="container-showcase">
    <section class="showcase">
      <article class="showcase__product" v-for="product in products" :key="product.id">
        <img src="@/assets/images/products/macbook_pro.jpg" alt />
        <p class="showcase__product__price">{{product.price}}</p>
        <h2 class="showcase__product__name">{{product.name}}</h2>
      </article>
    </section>
  </div>
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

<style scoped lang="scss">
.container-showcase {
  max-width: 1200px;
  margin: 0 auto;
}
.showcase {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  margin: 30px;
  &__product {
    @extend %elevation-e4;
    @include radius(small);
    padding: 10px;
    transition: all 0.3s;
    background: #fff;

    &:hover {
      @extend %elevation-e5;
      @include z-index(z1);
      transform: scale(1.1);
      position: relative;
    }
    img {
      border-radius: 4px;
      margin-bottom: 20px;
    }
    &__price {
      margin-bottom: 10px;
      color: color(product, price);
      font-weight: bold;
    }
    &__name {
      margin-bottom: 10px;
      color: color(neutral, black, light);
    }
    // url("")
  }
}
</style>