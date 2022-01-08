




const treeValueCount = (root, target) => {
  // todo
  let count = 0;
  if (!root) return count;
  const stack = [ root ];
  
  while (stack.length) {
    let node = stack.pop();
    if (node.val === target) count++;
    
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
    
  }
  
  
  
  return count;
};


// ------------------------------------------


const treeValueCount = (root, target) => {
  // todo
  if (!root) return 0;
  let match = root.val === target ? 1 : 0;
  
  let left = treeValueCount(root.left, target);
  let right = treeValueCount(root.right, target);
  return match + left + right;
};
