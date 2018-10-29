<template>
  <Interval :delay="1000">
    <div slot-scope="{ start, stop }">
      <h1>Interval Demo</h1>
      The time is now {{ new Date().toLocaleTimeString() }}
    </div>
  </Interval>
</template>

<script>
import Interval from '../../src/components/Interval.vue';

export default {
  components: {
    Interval,
  },
}
</script>
