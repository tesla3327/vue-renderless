const createLifecycleComponent = (lifecycle, eventName) => ({
  // Capitalize the first letter
  name: lifecycle[0].toUpperCase() + lifecycle.substr(1),

  // Create lifecycle method
  [lifecycle]() {
    // Emit the event using the name of the lifecycle
    this.$emit(eventName || lifecycle);
  },

  // Render nothing
  render() {
    return undefined;
  }
});

export const Mounted = createLifecycleComponent('mounted');
export const BeforeDestroy = createLifecycleComponent('beforeDestroy', 'before-destroy');
export const Updated = createLifecycleComponent('updated');
