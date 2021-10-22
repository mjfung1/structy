// r = # rows
// c = # columns
// time:  O(r*c)
// space: O(r*c)

const countPaths = (grid, row = 0, col = 0, memo = {}) => {
  // todo
  let pos = row + "," + col;

  if (pos in memo) return memo[pos];

  if (row === grid.length || col === grid[0].length || grid[row][col] === "X")
    return 0;
  if (row === grid.length - 1 && col === grid[0].length - 1) return 1;

  let down = countPaths(grid, row + 1, col, memo);
  let left = countPaths(grid, row, col + 1, memo);

  memo[pos] = down + left;
  return memo[pos];
};