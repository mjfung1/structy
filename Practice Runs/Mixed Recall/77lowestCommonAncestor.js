

const lowestCommonAncestor = (root, val1, val2) => {
  // todo
  if (!root) return null;
  if (root.val === val1 || root.val === val2) return root.val;
  
  let left = lowestCommonAncestor(root.left, val1, val2);
  let right = lowestCommonAncestor(root.right, val1, val2);
  
  if (left && right) {
    return root.val;
  } else {
    return left || right;
  }
};



// --------------------------------------------
// n = number of nodes
// Time: O(n)
// Space: O(n)
const lowestCommonAncestor = (root, val1, val2) => {
  // todo
  let path1 = getPath(root, val1);
  let path2 = getPath(root, val2);
  
  let set = new Set(path1);
  for (let val of path2) {
    if (set.has(val)) return val;
  }
};

const getPath = (root, val) => {
  if (!root) return null;
  if (root.val === val) return [ root.val ];
  
  let left = getPath(root.left, val);
  let right = getPath(root.right, val);
  
  if (left) {
    return [...left, root.val];
  }
  
  if (right) {
    return [...right, root.val];
  }
}