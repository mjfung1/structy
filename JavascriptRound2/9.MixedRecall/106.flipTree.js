


const flipTree = (root) => {
  // todo
  const queue = [ root ];
  
  while (queue.length) {
    let node = queue.shift();
    
    [node.left, node.right] = [node.right, node.left];
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return root;
};
