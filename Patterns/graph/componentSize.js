
// LARGEST COMPONENT   41
// MINIMUM ISLAND      44
// both involve finding size of component 

// Find Size of Largest Component in Graph

const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;
  
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > largest) largest = size;
  }
  
  return largest;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  
  visited.add(node);
  
  let size = 1;
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }
  
  return size;
};

// -------------------------------------------- //
// Find the Minimum Island Size of Grid
const minimumIsland = (grid) => {
  const visited = new Set();
  
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }
  
  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;
  
  if (grid[r][c] === 'W') return 0;
  
  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);
  return size;
};