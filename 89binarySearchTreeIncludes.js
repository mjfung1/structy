

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

// ----------------------------------- //

const binarySearchTreeIncludes = (root, target) => {
  // todo
  if (!root) return false;
  if (root.val === target) return true;
  
  if (root.val > target) return binarySearchTreeIncludes(root.left, target);
  
  if (root.val < target) return binarySearchTreeIncludes(root.right, target);
};


// -------------------------------------- //
// iteratively
const binarySearchTreeIncludes = (root, target) => {
  // todo
  let stack = [ root ];
  
  while (stack.length) {
    let node = stack.pop();
    if (node.val === target) return true;
    
    if (node.val > target) {
      if (!node.left) return false;
      stack.push(node.left);
    } else {
      if (!node.right) return false;
      stack.push(node.right);
    }
  }
};
