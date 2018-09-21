<script>
import { renderToScopedSlot } from '../util.js';

export default {
  name: 'Log',

  props: {
    value: {
      required: true,
    },

    createLog: {
      type: Function,
    }
  },

  mounted() {
    this.log();
  },

  watch: {
    value: {
      handler: 'log',
    }
  },

  methods: {
    log() {
      if (this.createLog) {
        console.log(this.createLog(this.value));
      } else {
        console.log(this.value);
      }
    }
  },

  render() {
    return undefined;
  }
}
</script>