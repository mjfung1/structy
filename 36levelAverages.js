
// time:  O(n);
// space: O(n);

const levelAverages = (root) => {
  // todo
  if (!root) return [];
  const avgs = [];
  const queue = [root];

  while (queue.length) {
    let size = queue.length;
    let numOfNodes = size;
    let total = 0;

    while (size--) {
      let node = queue.shift();
      total += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    avgs.push(total / numOfNodes);
  }

  return avgs;
};
