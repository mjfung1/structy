
// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)

const closestCarrot = (grid, startRow, startCol) => {
  // todo
  const queue = [ [startRow, startCol, 0] ];
  let visited = new Set();
  
  while (queue.length) {
    let [row, col, distance] = queue.shift();
    if (grid[row][col] === 'C') return distance;
    let key = row + ',' + col;
    visited.add(key);
    
    let steps = [[1,0], [-1,0], [0,1], [0,-1]];
    for (let [x, y] of steps) {
      let newRow = row + x;
      let newCol = col + y;
      let key = newRow + ',' + newCol;
      
      if (inBounds(grid, newRow, newCol) && grid[newRow][newCol] !== 'X' 
          && !(visited.has(key))) {
        queue.push([ newRow, newCol, distance + 1 ]);
      }
    }
  }
  
  return -1;
};

const inBounds = (grid, row, col) => {
  let inRow = row >= 0 && row < grid.length;
  let inCol = col >= 0 && col < grid[0].length;
  return inRow && inCol;
};
