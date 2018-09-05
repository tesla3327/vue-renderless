<script>
import { renderToScopedSlot } from '../../util.js';

export default {
  name: 'Watch',

  props: {
    value: {
      required: true,
    },
  },

  watch: {
    value: {
      handler() {
        this.$emit('change');
      }
    }
  },

  render() {
    return undefined;
  }
}
</script>
