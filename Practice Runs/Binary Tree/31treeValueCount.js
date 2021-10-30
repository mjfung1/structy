
// recursive
const treeValueCount = (root, target) => {
  // todo
  if (!root) return 0;
  let value = root.val === target ? 1 : 0
  return value + treeValueCount(root.left, target) + treeValueCount(root.right, target)
};


// iterative
const treeValueCount = (root, target) => {
  // todo
  if (!root) return 0;
  const queue = [root];
  let count = 0;
  while (queue.length) {
    let node = queue.shift();
    if (node.val === target) count++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return count;
};