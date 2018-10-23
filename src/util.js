const that = this;

// Find the first leaf node in the vdom tree
export const resolveNodeArray = node => Array.isArray(node)
  ? resolveNodeArray(node[0])
  : node;
  
/**
 * Must bind this to the Vue instance
 */
export const renderToScopedSlot = (that, listOfProps) => {
  const mapObj = {};
  listOfProps.forEach(prop => {
    mapObj[prop] = that[prop];
  });

  const node = that.$scopedSlots.default(mapObj);

  return resolveNodeArray(node);
};

/**
 * Add a value on to the end of an array. If the value is
 * an array we concatenate the two arrays.
 */
export const concatValueOrArray = (array, valueOrArray) =>
  Array.isArray(valueOrArray)
    ? [...array, ...valueOrArray]
    : [...array, valueOrArray];
