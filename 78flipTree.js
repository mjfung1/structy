
// recursive

const flipTree = (root) => {
  // todo
  if (!root) return;
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