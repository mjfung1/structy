

// n = number of nodes
// e = number edges
// time:  O(e)
// space: O(n)

const connectedComponentsCount = (graph) => {
  // todo
  let count = 0;
  let visited = new Set();
  for (const key in graph) {
    if (!visited.has(Number(key))) {
      goVisit(key, graph, visited);
      count++;
    }
  }
  return count;
};

const goVisit = (node, graph, visited) => {
  if (visited.has(node)) return;
  visited.add(node);

  for (let neighbor of graph[node]) {
    goVisit(neighbor, graph, visited);
  }
};


// ------------------------------------------ //
const connectedComponentsCount = (graph) => {
  // todo
  let count = 0;
  let visited = new Set();
  for (let key in graph) {
    key = Number(key);
    if (goVisit(key, graph, visited)) count++;
  }
  return count;
};

const goVisit = (node, graph, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);

  for (let neighbor of graph[node]) {
    goVisit(neighbor, graph, visited);
  }
  // this will hit after every neighbor has been visited;
  return true;
};


// ------------------------------------------- //

// r = number of rows
// c = number of columns
// time:  O(rc)
// space: O(rc)

const islandCount = (grid) => {
  let islandCount = 0;
  let visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited)) islandCount++;
    }
  }

  return islandCount;
};

const explore = (grid, row, col, visited) => {
  let rowInBounds = row >= 0 && row < grid.length;
  let colInBounds = col >= 0 && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[row][col] === "W") return false;

  let pos = `${row}, ${col}`;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, row + 1, col, visited);
  explore(grid, row - 1, col, visited);
  explore(grid, row, col + 1, visited);
  explore(grid, row, col - 1, visited);

  return true;
};
