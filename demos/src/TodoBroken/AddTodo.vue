<template>
  <State :initial-value="''">
    <template slot-scope="{ setValue, value }">
      <form
        @submit.prevent="() => {
          $emit('add', value);
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
</template>

<script>
import State from '../../../src/components/data/State.vue';

export default {
  name: 'AddTodo',

  components: {
    State,
  }
}
</script>