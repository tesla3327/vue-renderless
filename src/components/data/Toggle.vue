<script>
import { renderToScopedSlot } from '../../util.js';

export default {
  name: 'Toggle',

  props: {
    initialValue: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: this.initialValue,
    };
  },

  methods: {
    toggle() {
      this.value = !this.value;
    }
  },

  render() {
    return renderToScopedSlot(this, [
      'value',
      'toggle',
    ]);
  }
}
</script>
