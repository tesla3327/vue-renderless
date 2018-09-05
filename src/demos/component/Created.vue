<template>
  <Value>
    <template slot-scope="{ setValue, value }">
      <List>
        <div slot-scope="{ add, clear, remove, values }">
          <Created @created="add('First!')" />

          <h1>Created Demo</h1>
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
        </div>
      </List>
    </template>
  </Value>
</template>

<script>
import List from '../../components/data/List.vue';
import Value from '../../components/data/Value.vue';
import { Created } from '../../components/component/Lifecycle.js';

export default {
  components: {
    List,
    Value,
    Created,
  },

  methods: {
    valuesChanged() {
      console.log('Values have changed!');
    }
  }
}
</script>
