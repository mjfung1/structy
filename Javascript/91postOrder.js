

// n = number of nodes
// Time:  O(n)
// Space: O(n)

const postOrder = (root) => {
  // todo
  const values = [];
  traverse(root, values);
  return values;
};

const traverse = (node, array) => {
  if (!node) return;
  traverse(node.left, array);
  traverse(node.right, array);
  array.push(node.val);
};