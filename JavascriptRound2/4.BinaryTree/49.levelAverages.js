


const levelAverages = (root) => {
  // todo
  const levels = [];
  
  getLevels(root, levels, 0); 
  
  return levels.map(level => getAvg(level));
};

const getLevels = (root, levels, level) => {
  if (!root) return;
  
  if (levels[level] === undefined) levels[level] = [];
  levels[level].push(root.val);
  
  getLevels(root.left, levels, level + 1);
  getLevels(root.right, levels, level + 1);
};


const getAvg = ( array ) => {
  let sum = array.reduce((acc, red) => acc + red);
  return sum / array.length;
};