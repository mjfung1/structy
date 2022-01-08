


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  // todo
  const values = [];
  
  const dfs = (root) => {
    if (!root) return null;
    
    values.push(root.val);
    dfs(root.left);
    dfs(root.right);
    
  };
  
  dfs(root);
  
  return values;
};


// ------------------------

const depthFirstValues = (root) => {
  // todo
  if (!root) return [];
  const values = [];
  const stack = [ root ];
  
  while (stack.length) {
    const node = stack.pop();
    
    values.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    
  }
  
  return values;
};

// ---------------------------------------

const depthFirstValues = (root) => {
  // todo
  if (!root) return [];
  
  const left = depthFirstValues(root.left);
  const right = depthFirstValues(root.right);
  return [ root.val, ...left, ...right ]
};