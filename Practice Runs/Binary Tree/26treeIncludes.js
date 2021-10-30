
// recursive
const treeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  if (root.val === target) return true;
  
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};


// iterative
const treeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  let queue = [ root ];
  while (queue.length) {
    let node = queue.shift();
    if (node.val === target) return true;
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return false;
};