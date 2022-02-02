

const stringSearch = (grid, s) => {
  // todo
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (search(row, col, grid, s) === true) {
        return true;
      }
    }
  }
  console.log(grid)
  return false;
};

const search = (row, col, grid, s, i = 0) => {
  if (row < 0 || row === grid.length || col < 0 || col === grid[0].length) return false;
  if (i === s.length) return true;
  if (grid[row][col] !== s[i]) return false;
  
  let temp = grid[row][col];
  grid[row][col] = '*';
  
  let result =  search(row + 1, col, grid, s, i + 1) ||
                search(row - 1, col, grid, s, i + 1) ||
                search(row, col + 1, grid, s, i + 1) ||
                search(row, col - 1, grid, s, i + 1)
  
  grid[row][col] = temp;
  
  return result;
};