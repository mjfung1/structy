

const allTreePaths = (root) => {
  // todo
  if (!root) return [];
  if (!root.left && !root.right) return [ [root.val] ];
  
  let allPaths = [];
  
  let left = allTreePaths(root.left);
  left.map(subarray => allPaths.push([root.val, ...subarray]));
  
  
  let right = allTreePaths(root.right);
  right.map(subarray => allPaths.push([root.val, ...subarray]));
  
  return allPaths;
};