<template>
  <Renderless>
    <Mounted @mounted="log" />
    <Watch :value="value" @change="() => log('crazy')"/>
  </Renderless>
</template>

<script>
import Renderless from './Renderless.vue';
import { Mounted } from './component/Lifecycle.js';
import Watch from './component/Watch.vue';

export default {
  name: 'Log',

  components: {
    Renderless,
    Mounted,
    Watch,
  },

  props: {
    value: {
      required: true,
    },

    createLog: {
      type: Function,
    }
  },

  // watch: {
  //   value: {
  //     handler() {
  //       this.log(this.value);
  //     }
  //   }
  // },

  methods: {
    log(val) {
      return console.log(this.value);
    }
  },

  // methods: {
    // log() {
    //   if (this.createLog) {
    //     console.log(this.createLog(this.value));
    //   } else {
    //     console.log(this.value);
    //   }
    // }
  // },
}
</script>