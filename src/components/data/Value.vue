<script>
import { renderToScopedSlot } from '../../util.js';

export default {
  name: 'Value',

  data() {
    return {
      value: '',
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

