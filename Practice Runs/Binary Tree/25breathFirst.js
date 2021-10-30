const breadthFirstValues = (root) => {
  // todo
  if (!root) return [];
  let queue = [root];
  let values = [];
  
  while (queue.length) {
    let node = queue.shift();
    values.push(node.val);
    
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  
  return values;
};
