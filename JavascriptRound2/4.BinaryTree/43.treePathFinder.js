


const pathFinder = (root, target) => {
  // todo
  if (!root) return null;
  if (root.val === target) return [ root.val ];
  
  const left = pathFinder(root.left, target);
  const right = pathFinder(root.right, target);
  
  if (left) {
    return [ root.val, ...left ];
  }
  
  if (right) {
    return [ root.val, ...right ];
  }
  
  return null;
};

