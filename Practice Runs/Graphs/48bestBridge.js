
// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)

const bestBridge = (grid) => {
  let firstLand = new Set();
  
  loop1:
  for (let row = 0; row < grid.length; row++) {
    loop2:
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 'L') {
        getLand(grid, row, col, firstLand);
        break loop1;
      }
    }
  }
  
  let visited = new Set(firstLand);
  let queue = [];
  for (let pos of firstLand) {
    let [row, col] = pos.split(',').map(Number);
    queue.push([row, col, 0]);
  }
  
  while (queue.length) {
    const [row, col, distance] = queue.shift();
    let key = row + ',' + col;
    
    if (grid[row][col] === 'L' && !firstLand.has(key)) return distance - 1;
    
    const steps = [[1,0], [-1,0], [0,1], [0,-1]];
    for (let [x, y] of steps) {
      let newRow = row + x;
      let newCol = col + y;
      let key = newRow + ',' + newCol;
      
      if (inBounds(newRow, newCol, grid) && !visited.has(key)) {
        visited.add(key);
        queue.push([newRow, newCol, distance + 1]);
      }
      
    }
  }
  
};

const outBounds = (row, col, graph) => {
  let outRow = row < 0 || row === graph.length;
  let outCol = col < 0 || col === graph[0].length;
  return outCol || outRow;
};

const inBounds = (row, col, grid) => {
  let inRow = row >= 0 && row < grid.length;
  let inCol = col >= 0 && col < grid[0].length;
  return inRow && inCol;
};

const getLand = (grid, row, col, firstLand) => {
   if (outBounds(row, col, grid)) return;
  // if (!inBounds(row, col, grid)) return;
  if (grid[row][col] === 'W') return;
  
  let key = row + ',' + col;
  if (firstLand.has(key)) return;
  firstLand.add(key);
  
  getLand(grid, row+1, col, firstLand);
  getLand(grid, row-1, col, firstLand);
  getLand(grid, row, col+1, firstLand);
  getLand(grid, row, col-1, firstLand);
};
