// n = number of nodes
// time:  O(n)
// space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the 
// JavaScript shift() methods runs in O(n). JavaScript does not have a native 
// queue data structure that is maximally efficient.

// breadth first search
const treeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  let queue = [root];
  
  while (queue.length) {
    let node = queue.shift();
    
    if (node.val === target) return true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return false
 
};
// ---------------------------------------- // 
// depth first search
// n = number of nodes
// time:  O(n)
// space: O(n)
const treeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  if (root.val === target) return true;
  
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
 
};

// ------------------------------------------ //

const treeIncludes = (root, target) => {
  // todo
  let output = false;
  
  function dfs(root, target) {
    if (!root) return;
    if (root.val === target) return output = true;
    
    dfs(root.left, target);
    dfs(root.right, target);
  }
  
  dfs(root, target);
  return output;
 
};

