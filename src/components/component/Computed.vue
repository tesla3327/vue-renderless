<script>
import { renderToScopedSlot } from '../../util.js';

export default {
  name: 'Computed',

  props: {
    compute: {
      type: Function,
      required: true,
    }
  },

  computed: {
    computedValue() {
      return this.compute();
    }
  },

  render() {
    return renderToScopedSlot(this, [
      'computedValue',
    ]);
  }
}
</script>
