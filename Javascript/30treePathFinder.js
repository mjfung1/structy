// BACKTRACKING
const pathFinder = (root, target) => {
  // todo
  function dfs(root, target, path) {
    if (!root) return false;
    path.push(root.val);
    if (root.val === target) return true;
    let left = dfs(root.left, target, path);
    let right = dfs(root.right, target, path);
    if (left || right) return true;
    path.pop();
  }
  
  let path = [];
  dfs(root, target, path);
  return path.length > 0 ? path : null;
};

// ------------------------------------ //
const pathFinder = (root, target) => {
  // todo
  const output = [];

  function dfs(root, target, array) {
    if (!root) return;
    array.push(root.val);
    if (root.val === target) return output.push(...array);

    dfs(root.left, target, [ ...array ]);
    dfs(root.right, target, [ ...array ]);
  }

  dfs(root, target, []);

  return output.length ? output : null;
};


//----------------------------------------------------//
// SLOW - BECAUSE OF THE ARRAY COPIES 0(N2)
const pathFinder = (root, target) => { 
  // todo
  if (!root) return null;
  if (root.val === target) return [ root.val ];

  let left = pathFinder(root.left, target);
  if (left) return [ root.val, ...left ];  // VERY COSTLY. ITERATES UNDER THE HOOD O(N)

  let right = pathFinder(root.right, target);
  if (right) return [ root.val, ...right ];

  return null; 
};


//----------------------------------------------------//


const pathFinder = (root, target) => {
  // todo
  let result = pathFinderHelper(root, target);

  if (result) return result.reverse();
  else return null;
};

const pathFinderHelper = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  let left = pathFinderHelper(root.left, target);
  if (left) {
    left.push(root.val);
    return left;
  }

  let right = pathFinderHelper(root.right, target);
  if (right) {
    right.push(root.val);
    return right;
  }

  return null;
};
