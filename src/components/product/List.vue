<template>
  <div>
    <div class="container-showcase">
      <transition mode="out-in">
        <div v-if="products && products.length" key="products">
          <section class="showcase">
            <article class="showcase__product" v-for="product in products" :key="product.id">
              <router-link :to="{name: 'product', params: {id: product.id}}">
                <img src="@/assets/images/products/macbook_pro.jpg" alt />
                <p class="showcase__product__price">{{product.price | numberPrice}}</p>
                <h2 class="showcase__product__name">{{product.name}}</h2>
              </router-link>
            </article>
          </section>
          <Pagination :itemsPerPage="this.productsPerPage" :totalItems="this.totalProducts" />
        </div>
        <div
          v-else-if="products && products.length === 0"
          class="without-result"
          key="without-result"
        >
          <p>Busca sem resultados. Tente buscar outro termo.</p>
        </div>
        <PageLoading v-else key="loading" />
      </transition>
    </div>
  </div>
</template>

<script>
import { api } from "@/services/api";
import Pagination from "@/components/product/Pagination";
import { serialize } from "@/helpers";

export default {
  name: "List",
  data() {
    return {
      products: [],
      productsPerPage: 9,
      totalProducts: 0
    };
  },
  computed: {
    url() {
      let queryString = serialize(this.$route.query);
      return `/product?_limit=${this.productsPerPage}${queryString}`;
    }
  },
  components: {
    Pagination
  },
  methods: {
    getAllProducts() {
      this.products = null;
      setTimeout(() => {
        api.get(this.url).then(response => {
          this.totalProducts = Number(response.headers["x-total-count"]);
          this.products = response.data;
        });
      }, 1500);
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
  .without-result {
    @include font-size(xx-big);
    @include font-weight(bold);
    text-align: center;
    color: color(neutral, black, light);
  }
}
.showcase {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 40px;
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
      @include radius(small);
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
  }
}
</style>