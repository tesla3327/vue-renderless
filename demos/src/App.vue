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
  margin: 50px;
}

input, button {
  padding: 7px 10px;
  margin: 5px;
  border-radius: 3px;
  border: none;
  box-shadow: 0 0 1px rgba(0,0,0,0.5),
              0 0 3px rgba(0,0,0,0.2);

}

button:hover {
  cursor: pointer;
}
</style>
