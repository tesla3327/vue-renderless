<script>
import { resolveNodeArray } from '../util.js';

export default {
  name: 'Event',

  props: {
    event: {
      type: String,
      required: true,
    },

    global: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    // Attach to window if global, or to the parent
    this.target = this.global
      ? window
      : this.$parent.$el;

    this.target.addEventListener(this.event, this.eventFired);
  },

  beforeDestroy() {
    this.target.removeEventListener(this.event, this.eventFired);
  },

  methods: {
    eventFired(e) {
      this.$emit('fired', e);
    },
  },

  render() {
    return resolveNodeArray(this.$slots.default);
  }
}
</script>
