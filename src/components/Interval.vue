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
    this.start();
  },

  beforeDestroy() {
    this.stop();
  },

  methods: {
    start() {
      this.timerId = setInterval(() => {
        this.ticks += 1;
      }, this.delay);
    },

    stop() {
      clearInterval(this.timerId);
    }
  },

  render() {
    return renderToScopedSlot(this, [
      'start',
      'stop',
      'ticks',
    ]);
  }
}
</script>
