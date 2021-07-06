// time:  O(n);
// space: O(n);
const howHigh = (node) => {
  // todo
  if (!node) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right))
};



// ------------------------------------------------- //

// time:  O(n);
// space: O(n);
const howHigh = (node) => {
  // todo
  const output = [];
  
  (function dfs(node, level) {
    if (!node) return;
    if (!output[level]) output[level] = [];
    dfs(node.left, level+1);
    dfs(node.right, level+1);
   })(node, 0);
  
  return output.length-1;
};


// ------------------------------------------------- //

// time:  O(n);
// space: O(n);
const howHigh = (node) => {
  // todo
  let depth = -1;
  if (!node) return depth;

  let queue = [node];

  while (queue.length) {
    let size = queue.length;
    depth += 1;

    while (size--) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
};
