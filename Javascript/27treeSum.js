

const treeSum = (root) => {
  // todo
  let sum = 0;
  if (!root) return sum;
  
  function dfs(node) {
    if (!node) return;
    sum += node.val;
    dfs(node.left);
    dfs(node.right);
  }
  
  dfs(root)
  return sum;
};


// depth first search
// n = number of nodes
// time:  O(n)
// space: O(n)


const treeSum = (root) => {
  // todo
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};

// -------------------------------- //
// breadth first search
// n = number of nodes
// time:  O(n)
// space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the 
// JavaScript shift() methods runs in O(n). JavaScript does not have a native 
// queue data structure that is maximally efficient.

const treeSum = (root) => {
  // todo
  if (!root) return 0;
  let sum = 0;
  const queue = [root];
  
  while (queue.length) {
    let node = queue.shift();
    sum += node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  
  
  return sum;
};


