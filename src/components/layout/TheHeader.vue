<template>
  <header>
    <nav>
      <router-link to="/" class="brand">
        <img src="@/assets/images/ranek.svg" alt="Ranek" />
      </router-link>
      <router-link to="/login" class="btn btn__big">Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped lang="scss">
header {
  @extend %elevation-e3;
  display: flex;
  padding: 15px 30px;
  background: #fff;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .brand {
      img {
        width: 90px;
      }
    }
  }
}
</style>
