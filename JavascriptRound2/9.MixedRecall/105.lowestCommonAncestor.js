


const lowestCommonAncestor = (root, val1, val2) => {
  // todo
  const path1 = findPath(root, val1);
  const path2 = findPath(root, val2);
  const set1 = new Set(path1);
  
  for (let node of path2) {
    if (set1.has(node)) return node;
  }

};

const findPath = (root, val) => {
  if (!root) return null;
  if (root.val === val) return [ root.val ];
  
  let left = findPath(root.left, val);
  let right = findPath(root.right, val);
  
  if (left) return [...left, root.val ];
  if (right) return [...right, root.val ];
  
  return null;
};


// ---------------------------------

const lowestCommonAncestor = (root, val1, val2) => {
  // todo
  if (!root) return null;
  if (root.val === val1 || root.val === val2) return root.val;
  
  let left = lowestCommonAncestor(root.left, val1, val2);
  let right = lowestCommonAncestor(root.right, val1, val2);
  
  if (left && right) return root.val;
  if (left) return left;
  else return right;
};