<template>
  <div id="app">
    <Headgear />
  </div>
</template>

<script>
import Headgear from './demos/headgear/HeadgearDemo.vue';

export default {
  name: 'app',
  components: {
    Headgear,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
