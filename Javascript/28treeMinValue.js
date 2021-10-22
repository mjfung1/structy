const treeMinValue = (root) => {
  // todo
  if (!root) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};
