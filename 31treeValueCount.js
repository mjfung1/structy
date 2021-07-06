
// time:  O(n)
// space: O(n)
const treeValueCountDFS = (root, target) => {
  // todo
  if (!root) return 0;
  let match = root.val === target ? 1 : 0;
  return match + treeValueCountDFS(root.left, target) + treeValueCountDFS(root.right, target)
};

// ---------------------------------------- //

// time:  O(n)
// space: O(n)
const treeValueCount = (root, target) => {
  // todo
  let count = 0;

  (function dfs(root) {
    if (!root) return;
    if (root.val === target) count++;
    dfs(root.left);
    dfs(root.right);
  })(root);

  return count;
};

// ---------------------------------------- //
 
// time:  O(n)
// space: O(n)
const treeValueCountBFS = (root, target) => {
  // todo
  let count = 0;
  if (root === null) return count;
  const queue = [ root ];

  while (queue.length) {
    let node = queue.shift();
    if (node.val === target) count += 1;

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return count;
};
