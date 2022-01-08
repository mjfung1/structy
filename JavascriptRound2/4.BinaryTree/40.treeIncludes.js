const treeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  const stack = [ root ];
  
  while (stack.length) {
    const node = stack.pop();
    if (node.val === target) return true;
    
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  
  
  return false;
};


// --------------------------


const treeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  if (root.val === target) return true;
  
  let left = treeIncludes(root.left, target);
  let right = treeIncludes(root.right, target);
  
  return left || right;
};

