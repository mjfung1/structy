
// n = number of nodes
// e = number edges
// time:  O(e)
// space: O(n)

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

// ------------------------------------ //
// My implementation. Took some trial n error

const largestComponent = (graph) => {
  // todo
  let largest = 0;
  let visited = new Set();
  let size = 1;

  function dfs(node, visited) {
    visited.add(node);

    graph[node].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited);
        size++;
      }
    });
  }

  for (let vertex in graph) {
    if (!visited.has(vertex)) {
      dfs(vertex, visited);
      largest = Math.max(largest, size);
      size = 1;
    }
  }

  return largest;
};


// ------------------------------------ //
// Cleaned up

const largestComponent = (graph) => {
  // todo
  let largest = 0;
  let visited = new Set();
  let size = 0;

  function dfs(node, visited) {
    if (visited.has(node)) return;
    visited.add(node);
    size++;
    graph[node].forEach((neighbor) => {
      dfs(neighbor, visited);
    });
  }

  for (let vertex in graph) {
    dfs(vertex, visited);
    largest = Math.max(largest, size);
    size = 0;
  }

  return largest;
};