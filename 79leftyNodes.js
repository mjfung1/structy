
// recursive
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


// ---------------------------- //
// iterative
const leftyNodes = (root) => {
  // todo
  if (!root) return [];
  const queue = [[root, 0]];
  const output = [];

  while (queue.length) {
    const [node, level] = queue.shift();
    if (!output[level]) output[level] = node.val;

    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  return output;
};
