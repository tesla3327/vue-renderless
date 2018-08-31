const that = this;

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
