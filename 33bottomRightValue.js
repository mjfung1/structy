// time:  O(n). But really O(n2) bc JS doesn't have a queue; shift() method runs in O(n).
// space: O(2n) => O(n)
const bottomRightValue = (root) => {
  // todo
  const queue = [ root ];
  const output = [];

  while (queue.length) {
    let node = queue.shift();
    output.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return output[output.length - 1];
};


// ----------------------------------- //
// BETTER IMPLEMENTATION. NO EXTRA ARRAY

// time:  O(n). But really O(n2)
// space: O(n).
const bottomRightValue = (root) => {
  // todo
  const queue = [root];
  let node = null;

  while (queue.length) {
    node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return node.val;
};

// ----------------------------------- //
const bottomRightValue = (root) => {
  // todo
  const queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    if (!queue.length) return node.val;
  }
};

// ----------------------------------- //

// RECURSIVE
// time:  O(n);
// space: O(n);
const bottomRightValue = (root) => {
  // todo
  const nodes = [];

  (function dfs(root, level) {
    if (!root) return;
    if (!nodes[level]) nodes[level] = [];
    nodes[level].push(root.val);

    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  })(root, 0);

  let lastSubarr = nodes[nodes.length - 1];
  let eleOfLastSubarr = lastSubarr[lastSubarr.length - 1];

  return eleOfLastSubarr;
};