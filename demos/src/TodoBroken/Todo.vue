<template>
  <List>
    <div slot-scope="{ add, clear, remove, update, values }">
      <Watch
        :value="values"
        @change="() => {
          document.title = `${values.length} Todos`;
        }"
      />
      <Log
        :value="values"
        :createLog="(val) => val.length > 0
          ? `Most recent todo: ${val[val.length - 1].text}`
          : 'No todos'"
      />
      <h1>Todo</h1>
      <AddTodo @add="(text) => add({ text, completed: false })" />
      <TodoList
        :todos="values"
        @remove="(idx) => remove(idx)"
        @toggle-complete="(idx) => update(idx, {
          text: values[idx].text,
          completed: !values[idx].completed,
        })"
      />
      <button @click="clear()">Clear All</button>
    </div>
  </List>
</template>

<script>
import List from '../../../src/components/data/List.vue';
import Watch from '../../../src/components/component/Watch.vue';
import Log from '../../../src/components/Log.vue';
import Interval from '../../../src/components/Interval.vue';
import AddTodo from './AddTodo.vue';
import TodoList from './TodoList.vue';

export default {
  name: 'TodoDemo',

  components: {
    Log,
    AddTodo,
    TodoList,
    List,
    Interval,
    Watch,
  },

  computed: {
    document() {
      return document;
    },
  },
}
</script>
