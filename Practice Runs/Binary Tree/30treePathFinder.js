

const pathFinder = (root, target) => {
  // todo
  if (!root) return null;
  if (root.val === target) return [ root.val ];
  
  let left = pathFinder(root.left, target);
  if (left) {
    return [ root.val, ...left ];
  }
  
  let right = pathFinder(root.right, target);
  if (right) {
    return [ root.val, ...right ];
  }
  return null;
};
