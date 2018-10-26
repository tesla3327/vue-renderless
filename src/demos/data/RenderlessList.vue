<template>
  <State>
    <template slot-scope="{ setState, state }">
      <RenderlessList>
        <div slot-scope="{ add, clear, remove, values }">
          <h1>List Demo</h1>
          {{ values }}
          <input
            :value="state.val"
            @input="setState({ val: $event.target.value })"
            @keydown.enter="add(state.val); setState({ val: '' })"
          />
          <button @click="add(state.val); setState({ val: '' })">Add</button>
          <button @click="clear()">Clear</button>
          <ul>
            <li v-for="(val, index) in values" :key="index">
              {{ val }} - <span @click="remove(index)">x</span>
            </li>
          </ul>
        </div>
      </RenderlessList>
    </template>
  </State>
</template>

<script>
import RenderlessList from '../../components/data/RenderlessList.vue';
import State from '../../components/data/State.vue';
import Log from '../../components/Log.vue';

export default {
  name: 'RenderlessListDemo',

  components: {
    RenderlessList,
    State,
    Log,
  }
}
</script>
