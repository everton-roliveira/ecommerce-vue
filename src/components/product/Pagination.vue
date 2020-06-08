<template>
  <div class="pagination">
    <ul v-if="totalPages > 0">
      <li v-if="pageCurrent > 1">
        <router-link :to="{query: query(1)}">
          <font-awesome-icon :icon="['fas', 'angle-double-left']" />
        </router-link>
      </li>
      <li v-else-if="pageCurrent === 1">
        <a class="page-disabled">
          <font-awesome-icon :icon="['fas', 'angle-double-left']" />
        </a>
      </li>
      <li v-for="page in pages" :key="page">
        <router-link :to="{query: query(page)}">{{page}}</router-link>
      </li>
      <li v-if="totalPages > pageCurrent">
        <router-link :to="{query: query(totalPages)}">
          <font-awesome-icon :icon="['fas', 'angle-double-right']" />
        </router-link>
      </li>
      <li v-if="totalPages === pageCurrent">
        <a class="page-disabled">
          <font-awesome-icon :icon="['fas', 'angle-double-right']" />
        </a>
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
      default: 9
    },
    totalItems: {
      type: Number,
      default: 0
    },
    numbersInVisualization: {
      type: Number,
      default: 6
    }
  },
  computed: {
    pageCurrent() {
      return Number(this.$route.query._page);
    },
    pages() {
      const current = this.pageCurrent;
      const range = this.numbersInVisualization;
      const offset = Math.ceil(range / 2);
      const total = this.totalPages;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);

      return pagesArray;
    },
    totalPages() {
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
        @include font-size(big);
        padding: 5px 15px;
        margin: 4px;
        transition: all 0.3s;
        color: color(neutral, black, light);
        &.router-link-exact-active,
        &:hover:not(.page-disabled) {
          background: color(brand, primary);
          color: #ffffff;
        }
        &.page-disabled {
          color: color(neutral, grey, light);
        }
      }
    }
  }
}
</style>