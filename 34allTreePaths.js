
// HELPER RECURSION

const allTreePaths = (root) => {
  // todo
  const output = [];

  function dfs(root, combo) {
    if (!root) return;

    let newCombo = [...combo, root.val];

    if (!root.left && !root.right) return output.push(newCombo);

    dfs(root.left, newCombo);
    dfs(root.right, newCombo);
  }

  dfs(root, []);

  return output;
};


// REGULAR RECURSION. MIND FUCKING!!

const allTreePaths = (root) => {
  // todo
  // if no root, there are no paths; so no subarrs
  if (!root) return [];
  // if only one node - this will be the path;
  if (!root.left && !root.right) return [[root.val]];

  const paths = [];

  let leftSubPaths = allTreePaths(root.left);
  for (let subPath of leftSubPaths) {
    paths.push([root.val, ...subPath]);
  }

  let rightSubPaths = allTreePaths(root.right);
  for (let subPath of rightSubPaths) {
    paths.push([root.val, ...subPath]);
  }

  return paths;
};