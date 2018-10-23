<template>
  <div id="app">
    <Watch />
  </div>
</template>

<script>
import Watch from './component/Watch.vue';

export default {
  name: 'app',
  components: {
    Watch,
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
