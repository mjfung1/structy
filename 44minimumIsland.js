
const minimumIsland = (grid) => {
  // todo
  let min = Infinity;
  let visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let size = explore(grid, row, col, visited);
      if (size && size < min) min = size;
    }
  }
  return min;
};

const explore = (grid, row, col, visited) => {
  let rowInBounds = 0 <= row && row < grid.length;
  let colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;

  if (grid[row][col] === "W") return 0;

  let pos = row + "," + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row, col + 1, visited);
  size += explore(grid, row, col - 1, visited);

  return size;
};


// -------------------------------------------- //
// WITHOUT VISITED SET.  INSTEAD JUST MARKING
const minimumIsland = (grid) => {
  // todo
  let min = Infinity;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let size = explore(grid, row, col);
      if (size && size < min) min = size;
    }
  }
  return min;
};

const explore = (grid, row, col) => {
  let rowInBounds = 0 <= row && row < grid.length;
  let colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;

  if (grid[row][col] === "W") return 0;

  // instead of using visited set;
  grid[row][col] = "W";

  let size = 1;
  size += explore(grid, row + 1, col);
  size += explore(grid, row - 1, col);
  size += explore(grid, row, col + 1);
  size += explore(grid, row, col - 1);

  return size;
};