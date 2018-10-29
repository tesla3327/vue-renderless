<template>
  <State :initial-value="''">
    <form
      slot-scope="{ setValue, value }"
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