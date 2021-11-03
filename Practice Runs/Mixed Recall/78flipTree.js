

// recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)
const flipTree = (root) => {
  // todo
  if (!root) return;
  [root.left, root.right] = [root.right, root.left];
  
  flipTree(root.left);
  flipTree(root.right);
  
  return root;
};

// ----------------------------------------
// iterative
// n = number of nodes
// Time: O(n)
// Space: O(n)
const flipTree = (root) => {
  // todo
  let queue = [root];
  
  while (queue.length) {
    let node = queue.shift();
    
    [node.left, node.right] = [node.right, node.left];
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return root;
};