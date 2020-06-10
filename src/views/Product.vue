<template>
  <section>
    <article v-if="product" class="product">
      <ul class="product__images" v-if="product.images && product.images.length > 0">
        <li v-for="(image, index) in product.images" :key="index">
          <img :src="image.src" alt="image.title" />
        </li>
      </ul>
      <div class="product__info">
        <h1>{{product.name}}</h1>
        <p class="product__info__price">{{product.price | numberPrice}}</p>
        <p class="product__info__description">{{product.description}}</p>
        <button class="btn" v-if="product.sold">Comprar</button>
        <button class="btn" v-else>Vendido</button>
      </div>
    </article>
    <PageLoading v-else />
  </section>
</template>

<script>
import { api } from "@/services/api";
export default {
  name: "Product",
  props: ["id"],
  data() {
    return {
      product: null
    };
  },
  methods: {
    getProduct() {
      const url = `/product/${this.id}`;
      api.get(url).then(response => {
        setTimeout(() => {
          this.product = response.data;
        }, 1000);
      });
    }
  },
  created() {
    this.getProduct();
  }
};
</script>

<style scoped lang="scss">
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 30px;
  grid-row: 30px;
  max-width: 1200px;
  padding: 60px 20px;
  margin: auto;
  &__images {
  }
  &__info {
    h1 {
      margin-bottom: 10px;
    }
    &__price {
      @include font-weight(bold);
      @include font-size(xx-big);
      color: color(product, price);
      margin-bottom: 40px;
    }
    &__decription {
      @include font-size(x-big);
    }
    .btn {
      margin-top: 60px;
      width: 200px;
    }
  }
}
</style>