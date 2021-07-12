// r = number of rows
// c = number of columns
// time:  O(rc)
// space: O(rc)

const bestBridge = (grid) => {
  // todo
  // find land. get visited set to find coordinates; dfs
  let island;
  upperloop: for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "L") {
        // expect this function to return an visited set with coordinates;
        island = islandTraversal(grid, row, col, new Set());
        break upperloop;
      }
    }
  }

  // then queue. bfs
  let visited = new Set(island);
  const queue = [];
  for (let pos of island) {
    const [row, col] = pos.split(",").map(Number);
    queue.push([row, col, 0]);
  }
  // console.log(queue)
  while (queue.length) {
    let [row, col, distance] = queue.shift();

    let pos = row + "," + col;
    // if it's not part of island.
    if (grid[row][col] === "L" && !island.has(pos)) return distance - 1;

    let deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let [x, y] of deltas) {
      let newRow = row + x;
      let newCol = col + y;
      let pos = newRow + "," + newCol;

      // if it hasn't been visited.
      if (inBounds(grid, newRow, newCol) && !visited.has(pos)) {
        visited.add(pos);
        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }
};

const inBounds = (grid, row, col) => {
  let rows = 0 <= row && row < grid.length;
  let cols = 0 <= col && col < grid[0].length;

  return rows && cols;
};

const islandTraversal = (grid, row, col, visited) => {
  if (!inBounds(grid, row, col) || grid[row][col] === "W") return;

  let pos = row + "," + col;
  if (visited.has(pos)) return;
  visited.add(pos);

  islandTraversal(grid, row + 1, col, visited);
  islandTraversal(grid, row - 1, col, visited);
  islandTraversal(grid, row, col + 1, visited);
  islandTraversal(grid, row, col - 1, visited);

  return visited;
};
