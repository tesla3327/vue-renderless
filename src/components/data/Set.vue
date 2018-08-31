<script>
import { renderToScopedSlot } from '../../util.js';

export default {
  name: 'Set',

  props: {
    initialSet: {
      type: Array,
      default: () => ([])
    },
  },

  data() {
    return {
      set: new Set(this.initialSet),
      values: [],
    };
  },

  methods: {
    add(val) {
      const result = this.set.add(val);
      this.values = Array.from(this.set.values());
      return result;
    },

    clear() {
      const result = this.set.clear();
      this.values = Array.from(this.set.values());
      return result;
    },

    remove(val) {
      const result = this.set.delete(val);
      this.values = Array.from(this.set.values());
      return result;
    },

    has(val) {
      const result = this.set.has(val);
      this.values = Array.from(this.set.values());
      return result;
    }
  },

  computed: {
    size() {
      return this.values.length;
    }
  },

  render() {
    return renderToScopedSlot(this, [
      'add',
      'clear',
      'remove',
      'has',
      'size',
      'values',
    ]);
  }
}
</script>
