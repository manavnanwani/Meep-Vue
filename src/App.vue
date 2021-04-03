<template>
  <div id="app">
    <img src="./assets/bg.svg" alt="" class='bg-img'>
    <Navbar />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/sass/bv-custom.scss";
</style>

<style>
.bg-img {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -99999;
}

</style>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
