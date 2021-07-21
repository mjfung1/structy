

// n = number of nodes
// time:  O(n)
// space: O(n)

const leftyNodes = (root) => {
  // todo
  const array = [];

  const traverse = (root, level) => {
    if (!root) return;

    if (!array[level]) array[level] = root.val;

    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };

  traverse(root, 0);
  return array;
};