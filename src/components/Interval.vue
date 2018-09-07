<script>
import { renderToScopedSlot } from '../util.js';

export default {
  name: 'Interval',

  props: {
    delay: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      ticks: 0,
    };
  },

  mounted() {
    this.timerId = setInterval(() => {
      this.ticks += 1;
    }, this.delay);
  },

  beforeDestroy() {
    clearInterval(this.timerId);
  },

  methods: {
    start() {
    },

    stop() {
    }
  },

  render() {
    return renderToScopedSlot(this, [
      'start',
      'stop',
      // Must be registered as a dependency of the render fn
      'ticks',
    ]);
  }
}
</script>
