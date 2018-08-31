<script>
import { renderToScopedSlot } from '../../util.js';

export default {
  name: 'List',

  props: {
    initialList: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      values: this.initialList,
    };
  },

  methods: {
    add(val) {
      this.values.push(val);
    },

    clear() {
      this.values = [];
    },

    remove(index) {
      this.values.splice(index, 1);
    },
  },

  render() {
    return renderToScopedSlot(this, [
      'add',
      'clear',
      'remove',
      'values',
    ]);
  }
}
</script>
