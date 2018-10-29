<template>
  <Renderless>
    <State :initial-value="(val) => {
      if (createLog) {
        log(createLog(val));
      } else {
        log(val);
      }
    }">
      <div slot-scope="{ value: logFn }">
        <Mounted @mounted="() => logFn(value)" />
        <Watch :value="value" @change="() => logFn(value)"/>
      </div>
    </State>
  </Renderless>
</template>

<script>
import Renderless from './Renderless.vue';
import { Mounted } from './component/Lifecycle.js';
import Watch from './component/Watch.vue';
import State from './data/State.vue';

export default {
  name: 'Log',

  components: {
    Renderless,
    Mounted,
    Watch,
    State,
  },

  props: {
    value: {
      required: true,
    },

    createLog: {
      type: Function,
    }
  },

  data() {
    return {
      log: console.log
    };
  }
}
</script>