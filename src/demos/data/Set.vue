<template>
  <State>
    <template slot-scope="{ setValue, value }">
      <Set>
        <div slot-scope="{ add, clear, remove, values, size }">
          <input
            :value="value"
            @input="setValue($event.target.value)"
            @keydown.enter="add(value); setValue('')"
          />
          <button @click="add(value); setValue('')">Add</button>
          <button @click="clear()">Clear</button>
          <ul>
            <li v-for="val in values" :key="val">
              {{ val }} - <span @click="remove(val)">x</span>
            </li>
          </ul>
          <span>Length: {{ size }}</span>
        </div>
      </Set>
    </template>
  </State>
</template>

<script>
import Set from '../../components/data/Set.vue';
import State from '../../components/data/State.vue';

export default {
  components: {
    Set,
    State,
  }
}
</script>
