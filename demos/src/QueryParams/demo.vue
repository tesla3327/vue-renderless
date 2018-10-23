<template>
  <Combine :components="components">
    <div slot-scope="{ combined: [
      { value, setValue },
      { queryParams, setQueryParam },
    ]}">
      <pre>{{ queryParams }}</pre>
      <input
        :value="value"
        @input="(e) => setValue(e.target.value)"
        @keyup.enter="setQueryParam('things', value); setValue('');"
      />
    </div>
  </Combine>
</template>

<script>
import State from '../../../src/components/data/State.vue';
import Combine from '../../../src/components/Combine.vue';
import QueryParams from './QueryParams.vue';

export default {
  components: {
    Combine,
  },

  data() {
    return {
      input: '',
      components: [State, QueryParams]
    };
  },
}
</script>
