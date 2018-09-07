<template>
  <Value>
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
  </Value>
</template>

<script>
import Value from '../../components/data/Value.vue';

export default {
  name: 'AddTodo',

  components: {
    Value,
  }
}
</script>