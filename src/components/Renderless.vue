<script>
import { resolveNodeArray } from '../util.js'; 

// This component allows us to compose renderless components declaratively
// using other components
export default {
  name: 'Renderless',

  props: {
    /**
     * Assign the object that will provided to the component's slot-scope.
     * If this is updated in the same tick that the function `provide` is
     * used to update, the function will have precedence.
     */
    provide: {
      type: Object,
      default: () => ({}),
    }
  },

  created() {
    this.provideData = this.provide;
  },

  watch: {
    provide: {
      deep: true,
      immediate: true,
      // Merge this with our internal data so we can use either
      // the prop or the method to update
      handler() {
        this.watchQueuedChanges = this.provide;
      }
    }
  },

  methods: {
    // Pass into scoped slot so child components can update
    // the values that are passed from the renderless component.
    provideFunc(obj) {
      this.funcQueuedChanges = obj;
    },

    /**
     * We queue up changes so that we can merge them all at once,
     * allowing us to better control which changes should get
     * precedence if there are multiple conflicting changes within
     * the same tick.
     */
    flushQueuedChanges() {
      // Flush any changes that we might have
      if (this.watchQueuedChanges || this.funcQueuedChanges) {
        // Give precedence to changes coming from the function
        this.provideData = Object.assign(
          this.provideData,
          this.watchQueuedChanges || {},
          this.funcQueuedChanges || {}
        );

        // Clear our queued changes
        this.watchQueuedChanges = undefined;
        this.funcQueuedChanges = undefined;
      }
    }
  },

  render(h) {
    this.flushQueuedChanges();

    // Get the renderless component's children. First we try
    // to access the scoped slot if there is one, falling back
    // on a regular slot.
    const children = this.$scopedSlots.default
      ? this.$scopedSlots.default({ provide: this.provideFunc })
      : this.$slots.default;

    // Hijack the parent nodes scoped slots to keep things clean
    if (this.$parent.$scopedSlots.default) {
      const parentNode = this.$parent.$scopedSlots.default({
        ...this.provideData,
      });

      const parentSlot = resolveNodeArray(parentNode);

      // Move any children of the renderless into the scoped slot
      if (Array.isArray(parentSlot.children)) {
        parentSlot.children = [
          ...children,
          ...parentSlot.children,
        ];
      } else if (parentSlot.children) {
        parentSlot.children = [
          ...children,
          parentSlot.children,
        ];
      }

      return parentSlot;
    } else {
      // We often don't even use a scoped slot of the parent component
      if (Array.isArray(children)) {
        // Wrap in a hidden div
        return h(
          'div',
          {
            attrs: { hidden: true },
          },
          [
            ...children,
          ]
        );
      } else {
        return children;
      }
    }
  }
}
</script>
