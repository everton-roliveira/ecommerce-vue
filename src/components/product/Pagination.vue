<template>
  <div class="pagination">
    <ul v-if="totalPage > 0">
      <li v-for="page in totalPage" :key="page">
        <router-link :to="{query: query(page)}">{{page}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    itemsPerPage: {
      type: Number,
      default: 1
    },
    totalItems: {
      type: Number,
      default: 1
    }
  },
  computed: {
    totalPage() {
      const total = this.totalItems / this.itemsPerPage;
      return total != Infinity ? Math.ceil(total) : 0;
    }
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page
      };
    }
  }
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  padding: 20px;
  ul {
    grid-column: 1 / -1;
    li {
      display: inline-block;
      a {
        @include radius(x-small);
        padding: 5px 15px;
        margin: 4px;
        transition: all 0.3s;
        font-size: 1.1rem;
        &.router-link-exact-active,
        &:hover {
          background: color(brand, primary);
          color: #ffffff;
        }
      }
    }
  }
}
</style>