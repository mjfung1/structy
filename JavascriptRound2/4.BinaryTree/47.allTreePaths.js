



const allTreePaths = (root) => {

  if (!root) return [];
  if (!root.left && !root.right) return [[ root.val ]];
  
  let result = [];
  
  let left = allTreePaths(root.left);
  for (let sub of left) {
    result.push([ root.val, ...sub ]);
  }
  
  let right = allTreePaths(root.right);
  for (let sub of right) {
    result.push([ root.val, ...sub ]);
  }
  
  return result;
};
