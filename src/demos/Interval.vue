<template>
  <Interval :delay="1000">
    <div slot-scope="{ start, stop }">
      <h1>Interval Demo</h1>
      The time is now {{ new Date().toLocaleTimeString() }}
    </div>
  </Interval>
</template>

<script>
import Value from '../components/data/Value.vue';
import List from '../components/data/List.vue';
import Interval from '../components/Interval.vue';
import Mounted from './Mounted.vue';

export default {
  components: {
    Interval,
    Mounted,
  },

  data() {
    return {
      components: [Value, List]
    }
  }
}
</script>
