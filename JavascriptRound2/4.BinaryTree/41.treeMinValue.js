


const treeMinValue = (root) => {
  // todo
  if (!root) return Infinity;
  if (!root.left && !root.right) return root.val;
  
  const left = treeMinValue(root.left);
  const right = treeMinValue(root.right);
  
  return Math.min(root.val, left, right);
};





const treeMinValue = (root) => {
  // todo
  let min = Infinity;
  const stack = [ root ];
  
  while (stack.length) {
    const node = stack.pop();
    
    min = Math.min(min, node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  
  return min;
};