<template>
  <div id="app">
    <Interval />
  </div>
</template>

<script>
// import HeadgearDemo from './demos/headgear/HeadgearDemo.vue';
import Interval from './demos/Interval.vue';

export default {
  name: 'app',
  components: {
    Interval,
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
