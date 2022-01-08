


const treeLevels = (root) => {
  // todo
  if (!root) return [];
  const queue = [[ root, 0 ]];
  const levels = [];
  
  while (queue.length) {
    let [ node, level ] = queue.shift();
    
    if (levels[level] === undefined) levels[level] = [];
    levels[level].push(node.val);
    
    if (node.left) queue.push([ node.left, level + 1 ]);
    if (node.right) queue.push([ node.right, level + 1 ]);
  }
  
  return levels;
};