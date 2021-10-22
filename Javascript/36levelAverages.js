
// recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)

const levelAverages = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  
  // look at this cool way to pass in a function w/o args
  return levels.map(getAvg);
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

const getAvg = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length;
};


// ------------------------------------------- //




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


// --------------------------------------- //

// time:  O(n);
// space: O(n);

const levelAverages = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);

  const avgs = [];
  for (let level of levels) {
    avgs.push(avg(level));
  }
  return avgs;
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

const avg = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length;
};