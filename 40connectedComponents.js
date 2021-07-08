

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
