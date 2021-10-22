
// alvins way;

const flipTree = (root) => {
  if (root === null) return null;
  const left = flipTree(root.left);
  const right = flipTree(root.right);
  root.right = left;
  root.left = right;
  return root;
};

// recursive
const flipTree = (root) => {
  // todo
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left]
  flipTree(root.left);
  flipTree(root.right);
  return root;
};

// --------------------------------- //

// iterative
const flipTree = (root) => {
  // todo
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) queue.push(node.left);

    if (node.right) queue.push(node.right);
  }
  return root;
};