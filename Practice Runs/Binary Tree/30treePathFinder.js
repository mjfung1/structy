

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


// ----------------------------------
// better complexity
const pathFinder = (root, target) => {
  // todo
  if (!root) return null;
  if (root.val === target) return [ root.val ];
  
  let values = [] 
  let left = pathFinder(root.left, target);
  if (left) {
    values.push(root.val, ...left);
  }
  
  let right = pathFinder(root.right, target);
  if (right) {
    values.push(root.val, ...right);
  }
  
  if (values.length) {
    return values;
  } else {
    return null;
  }
};