

const treeLevels = (root) => {
  // todo
  if (!root) return [];
  let queue = [ [root, 0] ];
  let output = [];
  
  while (queue.length) {
    let [node, level] = queue.shift();
    if (!(level in output)) output[level] = [];
    output[level].push(node.val);
    
    if (node.left) queue.push([node.left, level+1]);
    if (node.right) queue.push([node.right, level+1]);
  }
  
  return output;
};