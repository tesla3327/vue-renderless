<template>
  <List>
    <div slot-scope="{ add, clear, remove, update, values }">
      <Watch
        :value="values"
        @change="() => {
          document.title = `${values.length} Todos`;
        }"
      />

      <h1>Todo</h1>
      <Interval :delay="1000">
        <div slot-scope="{ start, stop, ticks }">
          Time on page: {{ ticks }}
        </div>
      </Interval>

      <State>
        <template slot-scope="{ setValue, value }">
          <form
            @submit.prevent="() => {
              add({
                text: value,
                completed: false,
              });
              setValue('');
            }"
          >
            <input
              :value="value"
              @input="setValue($event.target.value)"
            />
            <button type="submit">Add</button>
          </form>
        </template>
      </State>
      
      <ul>
        <li
          v-for="(val, index) in values"
          :class="{ completed: val.completed }"
          :key="index"
        >
          {{ val.text }} -
          <button @click="remove(index)">Delete</button>
          <button
            @click="update(index, {
              text: val.text,
              completed: !val.completed
            })"
          >
            Complete
          </button>
        </li>
      </ul>
      <button @click="clear()">Clear All</button>
    </div>
  </List>
</template>

<script>
import List from '../../src/components/data/List.vue';
import State from '../../src/components/data/State.vue';
import Watch from '../../src/components/component/Watch.vue';
import Interval from '../../src/components/Interval.vue';

export default {
  name: 'TodoDemo',
  
  components: {
    List,
    State,
    Interval,
    Watch,
  },

  computed: {
    that() {
      return this;
    },

    document() {
      return document;
    },

    window() {
      return window;
    },
  },
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>