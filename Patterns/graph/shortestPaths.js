
// 42  SHORTEST PATH
// 45  CLOSEST CARROT
// BFS

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([ nodeA ]);
  const queue = [[ nodeA, 0 ]];
  
  while (queue.length > 0) {
    const [ node, distance ] = queue.shift();
    
    if (node === nodeB) return distance;
    
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([ neighbor, distance + 1 ]);
      }
    }
  }
  
  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    
    graph[a].push(b);
    graph[b].push(a);
  }
  
  return graph;
};


// ---------------------------------------- //

const closestCarrot = (grid, startRow, startCol) => {
  const queue = [ [startRow, startCol, 0] ];
  const visited = new Set([ startRow + ',' + startCol ]);
  
  while (queue.length > 0) {
    const [ row, col, distance ] = queue.shift();
    
    if (grid[row][col] === 'C') return distance;
    
    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let delta of deltas)  {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + ',' + neighborCol;
      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
      if (rowInbounds && colInbounds && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !== 'X') {
        visited.add(neighborPos);
        queue.push([ neighborRow, neighborCol, distance + 1 ]);
      }
    }
  }
  
  return -1;
};



// ----------------------------------- //
// INTUITION
// find all positions of the island using dfs.
// then bfs to find shortest path
const bestBridge = (grid) => {
  let mainIsland;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const possibleIsland = traverseIsland(grid, r, c, new Set());
      if (possibleIsland.size > 0) {
        mainIsland = possibleIsland;
        break;
      }
    }
  }
  
  const visited = new Set(mainIsland);
  const queue = [];
  for (let pos of mainIsland) {
    const [ row, col ] = pos.split(',').map(Number);
    queue.push([row, col, 0]);
  }
  
  while (queue.length > 0) {
    const [ row, col, distance ] = queue.shift();
    
    const pos = row + ',' + col;
    if (grid[row][col] === 'L' && !mainIsland.has(pos)) return distance - 1;
    
    const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let delta of deltas) {
      const [ deltaRow, deltaCol ] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + ',' + neighborCol;
      if (isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const isInbounds = (grid, row, col) => {
  const rowInbounds = 0 <= row  && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  return rowInbounds && colInbounds;
};

const traverseIsland = (grid, row, col, visited) => {
  if (!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;
  
  const pos = row + ',' + col;
  if (visited.has(pos)) return visited;
  
  visited.add(pos);
  
  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row, col - 1, visited);
  traverseIsland(grid, row, col + 1, visited);
  
  return visited;
};