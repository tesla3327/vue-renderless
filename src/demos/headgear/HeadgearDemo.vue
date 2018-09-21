<template>
  <Combine :components="components">
    <template slot-scope="{ combined: [
      { value, setValue },
      { queryParams, setQueryParam },
    ]}">
      <div>
        <pre>{{ queryParams }}</pre>
        <input
          :value="value"
          @input="(e) => setValue(e.target.value)"
          @keyup.enter="setQueryParam('things', value); setValue('');"
        />
      </div>
    </template>
  </Combine>
</template>

<script>
import State from '../../components/data/State.vue';
import Headgear from '../../components/VueHeadgear.vue'
import Combine from '../../components/Combine.vue';

export default {
  components: {
    Combine,
  },

  data() {
    return {
      input: '',
      components: [State, Headgear]
    };
  },
}
</script>
