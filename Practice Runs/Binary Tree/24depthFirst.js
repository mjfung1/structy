

// recursive
const depthFirstValues = (root) => {
  // todo
  if (!root) return [];
  
  return [root.val, ...depthFirstValues(root.left), ...depthFirstValues(root.right)]
};



// iterative
const depthFirstValues = (root) => {
  // todo
  if (!root) return [];
  let values = [];
  let stack = [root];
  
  while (stack.length) {
    let node = stack.pop();
    values.push(node.val);
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    
  }
  
  
  return values;
};
