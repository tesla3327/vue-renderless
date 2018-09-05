<template>
  <div id="app">
    <BeforeDestroy />
  </div>
</template>

<script>
// import HeadgearDemo from './demos/headgear/HeadgearDemo.vue';
import BeforeDestroy from './demos/component/BeforeDestroy.vue';

export default {
  name: 'app',
  components: {
    BeforeDestroy,
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
