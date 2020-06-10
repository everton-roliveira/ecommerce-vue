<template>
  <div id="app">
    <TheHeader />
    <main>
      <transition>
        <router-view />
      </transition>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  color: color(brand, secondary);
  background: url("./assets/images/pattern.svg") repeat top;
  a {
    @include font-weight(bold);
    text-decoration: none;
    color: color(brand, secondary);
  }
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    flex: 1;
    padding: 30px;
  }
}
</style>
