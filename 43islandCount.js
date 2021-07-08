
// r = number of rows
// c = number of columns
// time: nO(rc)
// space: O(rc)

const islandCount = (grid) => {
  // todo
  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "L") {
        islandCount += 1;
        sinkLand(grid, row, col);
      }
    }
  }
  return islandCount;
};

const sinkLand = (grid, row, col) => {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
  if (grid[row][col] === "W") return;

  grid[row][col] = "W";

  sinkLand(grid, row + 1, col);
  sinkLand(grid, row - 1, col);
  sinkLand(grid, row, col + 1);
  sinkLand(grid, row, col - 1);
};


// -------------------------------------------- //

const islandCount = (grid) => {
  let islandCount = 0;
  let visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited) islandCount++;
    }
  }
  
  return islandCount;
};


const explore = (grid, row, col, visited) => {
  let rowInBounds = row >= 0 && row < grid.length;
  let colInBounds = col >= 0 && col < grid[0].length;
  
  if (!rowInBounds || !colInBounds) return false;
  if (grid[row][col] === 'W') return false;
  
  let pos = `${row}, ${col}`;
  if (visited.has(pos)) return false;
  visited.add(pos);
  
  explore(grid, row, col, visited);
  explore(grid, row, col, visited);
  explore(grid, row, col, visited);
  explore(grid, row, col, visited);
  
  return true;
};