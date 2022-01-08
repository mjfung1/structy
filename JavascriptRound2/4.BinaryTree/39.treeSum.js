
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}



const treeSum = (root) => {
  // todo
  if (!root) return 0;
  const left = treeSum(root.left);
  const right = treeSum(root.right);
  return root.val + left + right;
  
};

// --------------------------------------

const treeSum = (root) => {
  // todo
  if (!root) return 0;
  const stack = [root];
  let sum = 0;
  
  while (stack.length) {
    const node = stack.pop();
    sum += node.val;
    
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  
  return sum;
};
