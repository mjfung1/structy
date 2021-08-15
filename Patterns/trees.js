
// Max Root to leaf path sum
const maxPathSum = (root) => {
  // todo
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  let maxLeft = maxPathSum(root.left);
  let maxRight = maxPathSum(root.right);
  return root.val + Math.max(maxLeft, maxRight);
};




// Finding value in tree
const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};


// Total sum
const treeSum = (root) => {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};

// Min value
const treeMinValue = (root) => {
  if (root === null) return Infinity;
  const smallestLeftValue = treeMinValue(root.left);
  const smallestRightValue = treeMinValue(root.right);
  return Math.min(root.val, smallestLeftValue, smallestRightValue);
};

// Count target
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
};

// Tree height
const howHigh = (node) => {
  if (node === null) return -1;

  const leftHeight = howHigh(node.left);
  const rightHeight = howHigh(node.right);
  return 1 + Math.max(leftHeight, rightHeight);
};

// Max depth
const maxDepth = (root) => {
    if (!root) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right)
    return 1 + Math.max(leftDepth, rightDepth);
};

// Invert Binary Tree
const flipTree = (root) => {
  if (root === null) return null;
  const left = flipTree(root.left);
  const right = flipTree(root.right);
  root.right = left;
  root.left = right;
  return root;
};

// InOrder - pure recursion
const depthFirstValues = (root) => {
  if (root === null) return [];
  
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [ root.val, ...leftValues, ...rightValues ];
};


// All leaf nodes. Similar to new inOrder traversal implementation
const leafList = (root) => {
  // todo
  if (!root) return [];
  if (!root.left && !root.right) return [ root.val ];
  
  let left = leafList(root.left);
  let right = leafList(root.right);
  
  return [...left, ...right]; 
};

// Find Path from root to target
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];
  
  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [ root.val, ...leftPath];
  
  const rightPath = pathFinder(root.right, target);
  if (rightPath !== null) return [ root.val, ...rightPath];
  
  return null;
};

// Find all paths from root to leaf
const allTreePaths = (root) => {
  if (root === null) return [ ];
  
  if (root.left === null && root.right === null) return [ [root.val] ]
  
  const paths = [];
  
  const leftSubPaths = allTreePaths(root.left);
  for (let subPath of leftSubPaths) {
    paths.push([ root.val, ...subPath ]);
  }
  
  const rightSubPaths = allTreePaths(root.right);
  for (let subPath of rightSubPaths) {
    paths.push([ root.val, ...subPath ]);
  }
  
  return paths;
};


// Common Ancestor.  can also be implemented by finding both paths
// then find common first common value
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


// Is BST? 
const isBinarySearchTree = (root, minLimit = -Infinity, maxLimit = Infinity) => {
  // todo
  if (!root) return true;
  if (root.val > maxLimit || root.val < minLimit) return false;
  
  return isBinarySearchTree(root.left, minLimit, root.val) && isBinarySearchTree(root.right, root.val, maxLimit)
};

// Binary Search in binary tree
const binarySearchTreeIncludes = (root, target) => {
  if (root === null) return false;
  
  if (root.val === target) return true;
  
  if (target < root.val) {
    return binarySearchTreeIncludes(root.left, target);
  } else {
    return binarySearchTreeIncludes(root.right, target);
  }
};


// tree building;
const buildTreeInPost = (inOrder, postOrder) => {
  if (inOrder.length === 0) return null;
  const value = postOrder[postOrder.length - 1];
  const root = new Node(value);
  const mid = inOrder.indexOf(value);
  const leftIn = inOrder.slice(0, mid);
  const rightIn = inOrder.slice(mid + 1);
  const leftPost = postOrder.slice(0, leftIn.length);
  const rightPost = postOrder.slice(leftIn.length, -1);
  root.left = buildTreeInPost(leftIn, leftPost);
  root.right = buildTreeInPost(rightIn, rightPost);
  return root;
};