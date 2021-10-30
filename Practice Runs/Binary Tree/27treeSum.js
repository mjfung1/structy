
// recursive
const treeSum = (root) => {
  // todo
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};


// iterative
const treeSum = (root) => {
  // todo
  if (!root) return 0;
  let sum = 0;
  let queue = [root];
  
  while (queue.length) {
    let node = queue.shift();
    sum += node.val;
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    
  }
  return sum;
};