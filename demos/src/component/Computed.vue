<template>
  <State>
    <template slot-scope="{ setValue, value }">
      <List>
        <div slot-scope="{ add, clear, remove, values }">
          <h1>Computed Demo</h1>
          <input
            :value="value"
            @input="setValue($event.target.value)"
            @keydown.enter="add(value); setValue('')"
          />
          <button @click="add(value); setValue('')">Add</button>
          <button @click="clear()">Clear</button>
          <ul>
            <li v-for="(val, index) in values" :key="index">
              {{ val }} - <span @click="remove(index)">x</span>
            </li>
          </ul>

          <h2>Reversed List</h2>
          <Computed :compute="() => {
            return [...values].reverse();
          }">
            <p slot-scope="{ computedValue }">
              {{ computedValue }}
            </p>
          </Computed>
        </div>
      </List>
    </template>
  </State>
</template>

<script>
import List from '../../../src/components/data/List.vue';
import State from '../../../src/components/data/State.vue';
import Computed from '../../../src/components/component/Computed.vue';

export default {
  components: {
    List,
    State,
    Computed,
  },

  methods: {
    valuesChanged() {
      console.log('Values have changed!');
    }
  }
}
</script>
