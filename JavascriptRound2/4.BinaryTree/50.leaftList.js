


const leafList = (root) => {
  // todo
  if (!root) return [];
  const stack = [root];
  const leaves = [];
  
  while (stack.length) {
    const node = stack.pop();
    if (!node.left && !node.right) leaves.push(node.val);
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  
  
  return leaves;
};

// -------------------------------


const leafList = (root) => {
  // todo
  const leaves = [];
  
  fillLeaves(root, leaves);
  
  return leaves;
};

const fillLeaves = (root, array) => {
  if (!root) return;
  if (!root.left && !root.right) array.push(root.val);
  
  fillLeaves(root.left, array);
  fillLeaves(root.right, array);

};
