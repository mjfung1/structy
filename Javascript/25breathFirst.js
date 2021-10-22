
// n = number of nodes
// time:  O(n)
// space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the 
// JavaScript shift() methods runs in O(n). JavaScript does not have a native 
// queue data structure that is maximally efficient.

ITERATIVE
const breadthFirstValues = (root) => {
  if (!root) return [];
  // todo
  const queue = [root];
  const output = [];
  
  while (queue.length) {
    let node = queue.shift();
    output.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return output;
};

// ----------------------------------------------- //
// RECURSIVE
const breadthFirstValues = (root) => {
  const output = [];
  
  function dfs(root, level) {
    if (!root) return;
    
    if (!output[level]) output[level] = [];
    output[level].push(root.val);
    
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }
  
  dfs(root, 0);
  
  return output.flat();
  
};
