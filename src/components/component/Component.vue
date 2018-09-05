<script>
import { renderToScopedSlot } from '../../util.js';

export default {
  name: 'Component',

  props: {
    compute: {
      type: Function,
      required: true,
    },
    watchProp: {},

  },

  computed: {
    computedValue() {
      return this.compute();
    }
  },

  watch: {
    watchProp() {
      this.$emit('watch', this.watchProp);
    }
  },

  beforeCreate() {
    this.$emit('before-create');
  },

  created() {
    this.$emit('created');
  },

  beforeMount() {
    this.$emit('before-mount');
  },

  mounted() {
    this.$emit('mounted');
  },

  beforeUpdate() {
    this.$emit('before-update');
  },

  updated() {
    this.$emit('updated');
  },

  beforeDestroy() {
    this.$emit('before-destroy');
  },

  destroyed() {
    this.$emit('destroyed');
  },

  render() {
    return renderToScopedSlot(this, [
      'computedValue',
    ]);
  }
}
</script>
