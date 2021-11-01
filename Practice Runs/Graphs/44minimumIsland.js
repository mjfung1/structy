
// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)

const minimumIsland = (grid) => {
  // todo
  let smallestIsland = Infinity;
  let visited = new Set();
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let size = explore(grid, row, col, visited);
      if (size > 0) {
        smallestIsland = Math.min(smallestIsland, size);
      }
    }
  }
  return smallestIsland;
};

const explore = (grid, row, col, visited) => {
  if (row < 0 || row === grid.length ||
      col < 0 || col === grid[0].length
     ) return 0;
  
  if (grid[row][col] === 'W') return 0;
  
  let pos = row + ',' + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);
  
  let size = 1;
  
  size += explore(grid, row+1, col, visited);
  size += explore(grid, row-1, col, visited);
  size += explore(grid, row, col+1, visited);
  size += explore(grid, row, col-1, visited);

  return size;
};
