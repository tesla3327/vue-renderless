<template>
  <Renderless>
    <template slot-scope="{ provide }">
      <State :initial-state="{ list: [] }">
        <div slot-scope="{ state, setState, getState }">
          <Log :value="state" />
          <Created @created="() => {
            provide({
              add: (val) => setState({ list: [...(getState().list), val] }),
              values: getState().list,
            });
          }" />
          <Watch :value="state" @change="() => provide({ values: state.list })" />
        </div>
      </State>
    </template>
  </Renderless>
</template>

<script>
// import { renderToScopedSlot } from '../../util.js';
import State from './State.vue';
import Renderless from '../Renderless.vue';
import Watch from '../component/Watch.vue';
import Log from '../Log.vue';
import { Created, Mounted } from '../component/Lifecycle.js';

export default {
  name: 'RenderlessList',

  components: {
    Log,
    State,
    Renderless,
    Created,
    Watch,
    Mounted
  },

  props: {
    initialList: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      values: this.initialList,
    };
  },

  methods: {
    log(msg) {
      console.log(msg);
    },

    add(val) {
      this.values.push(val);
    },

    clear() {
      this.values = [];
    },

    remove(index) {
      this.values.splice(index, 1);
    },

    update(index, val) {
      this.values.splice(index, 1, val);
    }
  },

  // render() {
  //   return renderToScopedSlot(this, [
  //     'add',
  //     'clear',
  //     'remove',
  //     'update',
  //     'values',
  //   ]);
  // }
}
</script>
