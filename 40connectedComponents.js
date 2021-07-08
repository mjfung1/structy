

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