<template>
  <State>
    <template slot-scope="{ setValue, value }">
      <List>
        <div slot-scope="{ add, clear, remove, values }">
          <h1>Watch Demo</h1>
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
          <Watch :value="values" @change="valuesChanged" />
        </div>
      </List>
    </template>
  </State>
</template>

<script>
import List from '../../components/data/List.vue';
import State from '../../components/data/State.vue';
import Watch from '../../components/component/Watch.vue';

export default {
  components: {
    List,
    State,
    Watch,
  },

  methods: {
    valuesChanged() {
      console.log('Values have changed!');
    }
  }
}
</script>
