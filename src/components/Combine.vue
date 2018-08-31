<script>
import Renderless from './Renderless.vue';

export default {
  name: 'Combine',
  
  components: { Renderless },
  
  props: {
    components: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      combined: [],
    }
  },

  render: function(h) {
    // Alias runtime helpers
    const resolveScopedSlots = this._u;
    this.resolveSlot = this._t;

    const buildResult = (components, slotValue = []) => {
      return h(components[0], {
        scopedSlots: resolveScopedSlots([
          {
            key: 'default',
            fn: (bound) => {
              const newSlotValue = [...slotValue, bound];

              if (components.length > 1) {
                // Recursive case
                return [buildResult(components.slice(1), newSlotValue)];
              } else {
                // Base case
                return [this.resolveSlot('default', null, { combined: newSlotValue })];
              }
            }
          }
        ])
      });
    };
    
    return buildResult(this.components);
  }
}
</script>
