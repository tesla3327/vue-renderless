<template>
  <Value>
    <template slot-scope="{ setValue, value }">
      <List>
        <div slot-scope="{ add, clear, remove, values }">
          <h1>BeforeDestroy Demo</h1>
          <p>The <pre>BeforeDestroy</pre> lifecycle component has no access to context of destroyed component.</p>
          <p>But it has access to outer context, as long as that component still exists.</p>
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
              <BeforeDestroy @before-destroy="log(values)" />
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
import { BeforeDestroy } from '../../components/component/Lifecycle.js';

export default {
  components: {
    List,
    Value,
    BeforeDestroy,
  },

  methods: {
    log(msg) {
      console.log(msg);
    }
  }
}
</script>
