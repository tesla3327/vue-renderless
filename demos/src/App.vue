<template>
  <div id="app">
    <QueryParams />
  </div>
</template>

<script>
import QueryParams from './QueryParams/demo.vue';

export default {
  name: 'app',
  components: {
    QueryParams,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
