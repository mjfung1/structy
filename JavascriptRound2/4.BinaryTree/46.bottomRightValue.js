





const bottomRightValue = (root) => {
  // todo
  const queue = [ root ];
  let node;
  
  while (queue.length) {
    node = queue.shift();
    
    if (root.left) queue.push(root.left);
    if (root.right) queue.push(root.right);
  }
  
  return node.val;
};