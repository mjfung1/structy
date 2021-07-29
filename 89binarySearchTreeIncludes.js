

// n = number of nodes

// Worst Case
// time:  O(n)
// space: O(n)

// Best Case (balanced-tree)
// time:  O(log(n))
// space: O(log(n))

const binarySearchTreeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  if (root.val === target) return true;
  
  
  if (root.val > target) {
    return binarySearchTreeIncludes(root.left, target)
  } else {
    return binarySearchTreeIncludes(root.right, target)
  }
};