
// pure recursion

const leafList = (root) => {
  // todo
  if (!root) return [];
  if (!root.left && !root.right) return [ root.val ]; 
  
  let left = leafList(root.left);
  let right = leafList(root.right);
  return [ ...left, ...right ];
};

// ------------------------------------
// recursion with helper
const leafList = (root) => {
  let values = [];
  fillLeaves(root, values);
  return values;
};

const fillLeaves = (node, values) => {
  if (!node) return;
  if (!node.left && !node.right) values.push(node.val);
  
  fillLeaves(node.left, values);
  fillLeaves(node.right, values);
}


// -------------------------------------
// iterative. using a stack
const leafList = (root) => {
  if (!root) return [];
  let stack = [root];
  let leaves = [];
  
  while (stack.length) {
    let node = stack.pop();
    if (!node.left && !node.right) leaves.push(node.val);
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  
  return leaves;
};