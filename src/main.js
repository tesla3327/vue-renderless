import Vue from 'vue'
import App from './App.vue'

// console.log(App.render);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
