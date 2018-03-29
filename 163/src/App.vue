<template>
  <div id="app">
    <!-- <list :nav-list="navList" :active-nav-default="activeNavDefault"></list> -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
/* reset.css */
@import "assets/css/reset.scss";


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
