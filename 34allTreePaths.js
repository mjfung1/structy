

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
