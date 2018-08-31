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
    console.log('Event created');
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
