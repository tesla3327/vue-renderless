<template>
  <Renderless>
    <Value :initial-value="(val) => {
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
    </Value>
  </Renderless>
</template>

<script>
import Renderless from './Renderless.vue';
import { Mounted } from './component/Lifecycle.js';
import Watch from './component/Watch.vue';
import Value from './data/Value.vue';

export default {
  name: 'Log',

  components: {
    Renderless,
    Mounted,
    Watch,
    Value,
  },

  props: {
    value: {
      required: true,
    },

    createLog: {
      type: Function,
    }
  },

  computed: {
    log() {
      return console.log;
    }
  }
}
</script>