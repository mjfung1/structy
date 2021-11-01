
// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)

const islandCount = (grid) => {
  let islands = 0;
  let visited = new Set();
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited)) {
        islands++;
      }
    }
  }
  
  return islands;
};

const explore = (grid, row, col, visited) => {
  if (row < 0 || row === grid.length || 
      col < 0 || col === grid[0].length
     ) return false;
  
  if (grid[row][col] === 'W') return false;
  
  let key = row + ',' + col;
  if (visited.has(key)) return false;
  visited.add(key);
  
  explore(grid, row+1, col, visited);
  explore(grid, row-1, col, visited);
  explore(grid, row, col+1, visited);
  explore(grid, row, col-1, visited);

  return true;
};
