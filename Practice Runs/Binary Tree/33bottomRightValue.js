

const bottomRightValue = (root) => {
  // todo
  let queue = [root];
  let output;
  
  while (queue.length) {
    let node = queue.shift();
    output = node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return output;
};