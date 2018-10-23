<script>
import Renderless from './Renderless.vue';

export default {
  name: 'Combine',
  
  components: { Renderless },
  
  props: {
    /**
     * Array of components that we want to combine into
     * a single renderless component.
     */
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

    /* 
     * Took me awhile to figure this out recursively. I
     * basically just looked at the compiled output of
     * different render functions and reverse engineered
     * how Vue compiles them at runtime.
     *
     * This will most likely break when VNode structure is
     * changed with Vue 3.0
     */
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
