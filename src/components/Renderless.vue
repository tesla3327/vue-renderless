<script>
import { resolveNodeArray } from '../util.js'; 

// This component allows us to compose renderless components declaratively
// using other components
export default {
  name: 'Renderless',

  props: {
    provide: {
      type: Object,
      required: true,
    }
  },

  render() {
    // Hijack the parent nodes scoped slots to keep things clean
    const node = this.$parent.$scopedSlots.default({
      ...this.provide,
    });

    const scopedSlot = resolveNodeArray(node);

    // Move any children of the renderless into the scoped slot
    const children = this.$slots.default;
    if (Array.isArray(scopedSlot.children)) {
      scopedSlot.children = [
        ...children,
        ...scopedSlot.children,
      ];
    } else if (scopedSlot.children) {
      scopedSlot.children = [
        ...children,
        scopedSlot.children,
      ];
    }

    return scopedSlot;
  }
}
</script>
