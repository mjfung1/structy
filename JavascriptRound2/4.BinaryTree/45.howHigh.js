



const howHigh = (node) => {
  // todo
  if (!node) return -1;
  
  let left = howHigh(node.left);
  let right = howHigh(node.right);
  
  return 1 + Math.max(left, right);
};


const howHigh = (node) => {
  if (!node) return -1;
  const stack = [[ node, 0 ]];
  
  let maxHeight = - Infinity;
  
  while (stack.length) {
    let [ node, height ] = stack.pop();
    
    maxHeight = Math.max(maxHeight, height);
    
    if (node.left) stack.push([ node.left, height + 1 ]);
    if (node.right) stack.push([ node.right, height + 1 ]);
    
  }
  
  return maxHeight;
};



