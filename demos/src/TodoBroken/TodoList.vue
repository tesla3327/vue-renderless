<template>
  <ul>
    <li
      v-for="(val, index) in todos"
      :class="{ completed: val.completed }"
      :key="index"
    >
      {{ val.text }} -
      <button @click="$emit('remove', index)">Delete</button>
      <button @click="$emit('toggle-complete', index)">
        Complete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
