
// recursive
// time: O(n);
// space: O(n);

const maxPathSum = (root) => {
  // todo
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  
  const left = maxPathSum(root.left);
  const right = maxPathSum(root.right);
  
  return root.val + Math.max(left, right);
};



// ----------------------------------------

// iterative

const maxPathSum = (root) => {
  // todo
  const stack = [[ root, root.val ]];
  let maxSum = -Infinity;
  
  while (stack.length) {
    let [ node, sum ] = stack.pop();
    
    if (!node.left && !node.right) maxSum = Math.max(maxSum, sum);
    
    if (node.left) stack.push([ node.left, sum + node.left.val ]);
    if (node.right) stack.push([ node.right, sum + node.right.val ]);
  }
  
  return maxSum;
};
