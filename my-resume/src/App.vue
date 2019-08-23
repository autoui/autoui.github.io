<template>
    <div id="app">
        <my-resume></my-resume>
    </div>
</template>

<script>
import MyResume from './page/my-resume/index.vue'

export default {
    name: 'app',
    components: {
        MyResume
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
