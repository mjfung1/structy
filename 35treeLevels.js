
const treeLevels = (root) => {
  // todo
  if (!root) return [];
  const queue = [ { root, level: 0 } ];
  const levels = [];
  
  while (queue.length) {
    const { root, level } = queue.shift();
    
    if (!levels[level]) levels[level] = [];
    levels[level].push(root.val);
    
    if (root.left) queue.push( { root: root.left , level: level + 1 } );
    if (root.right) queue.push( { root: root.right, level: level + 1 } );
  }
  
  return levels;
};


// ------------------------------------------- //

const treeLevels = (root) => {
  // todo
  if (!root) return [];
  const queue = [[root, 0]];
  const levels = [];

  while (queue.length) {
    const [root, level] = queue.shift();

    if (!levels[level]) levels[level] = [];
    levels[level].push(root.val);

    if (root.left) queue.push([root.left, level + 1]);
    if (root.right) queue.push([root.right, level + 1]);
  }

  return levels;
};

// ------------------------------------------- //

const treeLevels = (root) => {
  // todo
  const levels = [];
  _treeLevels(root, levels, 0);
  return levels;
};

const _treeLevels = (root, levels, level) => {
  if (!root) return;
  
  if (levels.length === level) {
    levels[level] = [root.val];
  } else {
    levels[level].push(root.val);
  }
  
  _treeLevels(root.left, levels, level+1);
  _treeLevels(root.right, levels, level+1);
}

// ------------------------------------------- //

const treeLevels = (root) => {
  // todo
  const levels = [];

  function dfs(root, level) {
    if (!root) return;

    if (!levels[level]) levels[level] = [];
    levels[level].push(root.val);

    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }

  dfs(root, 0);
  return levels;
};