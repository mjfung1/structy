
// iterative
const howHigh = (node) => {
  // todo
  if (!node) return -1;
  let queue = [[node, 0]];
  let output;
  
  while (queue.length) {
    let [node, level] = queue.shift();
    output = level;
    if (node.left) queue.push([node.left, level+1]);
    if (node.right) queue.push([node.right, level+1]);
  }
  
  return output;
};


// recursive
const howHigh = (node) => {
  // todo
  if (!node) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right))
};