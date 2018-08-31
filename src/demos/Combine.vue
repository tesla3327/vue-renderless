<template>
  <Combine :components="components">
    <div slot-scope="{ combined: [
      { setValue, value },
      { add, clear, remove, values }
    ]}">
      <h1>Combine Demo</h1>
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
  </Combine>
</template>

<script>
import Value from '../components/data/Value.vue';
import List from '../components/data/List.vue';
import Combine from '../components/Combine.vue';

export default {
  components: {
    Combine,
  },

  data() {
    return {
      components: [Value, List]
    }
  }
}
</script>
