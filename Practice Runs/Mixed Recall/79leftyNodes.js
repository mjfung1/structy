
// n = number of nodes
// Time: O(n)
// Space: O(n)

const leftyNodes = (root) => {
  let values = [];
  getLeftValues(root, values, 0);
  return values;
};

const getLeftValues = (root, values, level) => {
  if (!root) return;
  if (!values[level]) values[level] = root.val;
  getLeftValues(root.left, values, level+1);
  getLeftValues(root.right, values, level+1);
};
