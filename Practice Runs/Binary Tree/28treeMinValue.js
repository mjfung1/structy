
// recursive
const treeMinValue = (root) => {
  // todo
  if (!root) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};


// iterative
const treeMinValue = (root) => {
  // todo
  let min = Infinity;
  let stack = [ root ];
  
  while (stack.length) {
    let node = stack.pop();
    min = Math.min(min, node.val);
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  
  return min;
};