


const leftyNodes = (root) => {
  // todo
  if (root === null) return [];
  const output = [];
  const stack = [ [root, 0 ] ];
  
  while (stack.length) {
    let [ node, level ] = stack.pop();
    
    if (output[level] === undefined) output.push(node.val);
    
    if (node.right) stack.push([ node.right, level + 1 ]);
    if (node.left) stack.push([ node.left, level + 1 ]);
  }

  return output;
};
