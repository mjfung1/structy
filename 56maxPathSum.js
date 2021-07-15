
// r = # rows
// c = # columns
// time:  O(r*c)
// space: O(r*c)

const maxPathSum = (grid, row = 0, col = 0, memo = {}) => {
  // todo
  if (row === grid.length || col === grid[0].length) return -Infinity;
  if (row === grid.length - 1 && col === grid[0].length - 1)
    return grid[row][col];

  let down = maxPathSum(grid, row + 1, col, memo);
  let right = maxPathSum(grid, row, col + 1, memo);

  return grid[row][col] + Math.max(down, right);
};

