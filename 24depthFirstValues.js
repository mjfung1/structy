

// n = number of nodes
// time:  O(n)
// space: O(n)

// RECURSIVE
const depthFirstValues = (root) => {
  // todo
  const output = [];
  
  function dfs(node) {
    if (!node) return;
    
    output.push(node.val);
    dfs(node.left)
    dfs(node.right)
  }
  
  dfs(root);
  return output;
};


// --------------------------------------- //
// VERY COOL IMPLEMENTATION

const depthFirstValues = (root) => {
  // todo
  if (!root) return [];
  let leftValues = depthFirstValues(root.left);
  let rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};


// ----------------------------------------- //
// ITERATIVE
const depthFirstValues = (root) => {
  // todo
  if (!root) return [];
  
  const stack = [ root ];
  const output = [];
  
  while (stack.length) {
    let node = stack.pop();
    output.push(node.val);
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    
  }
  
  return output;
};





