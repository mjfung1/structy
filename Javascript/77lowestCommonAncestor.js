

const lowestCommonAncestor = (root, val1, val2) => {
  // todo
  if (!root) return null;
  if (root.val === val1 || root.val === val2) return root.val;

  root.left = lowestCommonAncestor(root.left, val1, val2);
  root.right = lowestCommonAncestor(root.right, val1, val2);

  if (root.left && root.right) return root.val;

  return root.left ? root.left : root.right;
};



// --------------------------------------- //

// n = number of nodes
// time:  O(n)
// space: O(n)

const lowestCommonAncestor = (root, val1, val2) => {
  // todo
  const path1 = findPath(root, val1);
  const path2 = findPath(root, val2);
  const set2 = new Set(path2);

  for (let path of path1) {
    if (set2.has(path)) return path;
  }
};

const findPath = (root, val) => {
  if (!root) return null;
  if (root.val === val) return [root.val];

  let left = findPath(root.left, val);
  if (left) return [...left, root.val];

  let right = findPath(root.right, val);
  if (right) return [...right, root.val];
};
