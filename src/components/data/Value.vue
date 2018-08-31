<script>
import { renderToScopedSlot } from '../../util.js';

export default {
  name: 'Value',

  props: ['initialValue'],

  data() {
    return {
      value: this.initialValue || '',
    };
  },

  methods: {
    setValue(val) {
      this.value = val;
    },
  },

  render() {
    return renderToScopedSlot(this, ['setValue', 'value']);
  }
}
</script>
