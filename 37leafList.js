
// recursion. no helper function;

const leafList = (root) => {
  // todo
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];
  
  let left = leafList(root.left);
  let right = leafList(root.right);
  
  return [...left, ...right]; 
};





// -------------------------------------- //
// time:  O(n);
// space: O(n);
const leafList = (root) => {
  // todo
  const output = [];

  _leafList(root, output);

  return output;
};

const _leafList = (node, output) => {
  if (!node) return;
  if (!node.left && !node.right) output.push(node.val);

  _leafList(node.left, output);
  _leafList(node.right, output);
};

// -------------------------------------- //

// time:  O(n);
// space: O(n);
const leafList = (root) => {
  // todo
  if (!root) return [];
  const leaves = [];
  const stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (!node.left && !node.right) leaves.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return leaves;
};
