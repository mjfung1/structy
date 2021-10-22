

// recursive;

const isBinarySearchTree = (root, minAllowed = -Infinity, maxAllowed = Infinity) => {
  // todo
  if (!root) return true;
  if (root.val > maxAllowed || root.val < minAllowed) return false;
  
  return isBinarySearchTree(root.left, minAllowed, root.val) && isBinarySearchTree(root.right, root.val, maxAllowed)
};



// ---------------------------- //
// a little different?
const isBinarySearchTree = (root, target, min=null, max=null) => {
  // todo
  if (!root) return true;
  if ((max && root.val > max) || (min && root.val < min)) return false;
  
  // left cannot be greater than max(root.val)
  const isLeftValid = isBinarySearchTree(root.left, target, min, root.val);
  
  // right cannot be less than min(root.val)
  const isRightValid = isBinarySearchTree(root.right, target, root.val, max);
  
  return isLeftValid && isRightValid;
};