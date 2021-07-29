
// r = # grid rows
// c = # grid columns
// time:  O(3^(r*c))
// space: O(r*c)

const stringSearch = (grid, s) => {
  // todo
  let visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === s[0]) {
        if (search(grid, row, col, s, visited, 0)) return true;
      }
    }
  }
  return false;
};

const search = (grid, row, col, s, visited, i) => {
  if (i === s.length) return true;
  if (row < 0 || col < 0 || row === grid.length || col === grid[0].length) return false;
  if (grid[row][col] !== s[i]) return false;
  let key = row + ',' + col;
  
  if ( visited.has(key) ) return false;
  
  visited.add(key);
  
  
  let result = (search(grid, row+1, col, s, visited, i+1) ||
  search(grid, row-1, col, s, visited, i+1) ||
  search(grid, row, col+1, s, visited, i+1) ||
  search(grid, row, col-1, s, visited, i+1));
  
  visited.delete(key);
  
  return result;
  
  
};
