


const binarySearchTreeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  if (root.val === target) return true;
  
  if (root.val < target) {
    return binarySearchTreeIncludes(root.right, target);
  } else {
    return binarySearchTreeIncludes(root.left, target);
  }
  
};