


const rareRouting = (n, roads) => {
  // todo
  const graph = graphBuilder(n, roads);
  const visited = new Set();
  const canVisit = canVisitOnce(graph, 0,  visited);
  return canVisit && visited.size === n;
};

const canVisitOnce = (graph, node, visited, prev=null) => {
  if (visited.has(node)) return false;
  visited.add(node);
  
  for (let neighbor of graph[node]) {
    if (prev === null || prev !== neighbor) {
      if (canVisitOnce(graph, neighbor, visited, node) === false) {
        return false;
      }
    }
  }
  return true;
};

const graphBuilder = (numRoads, roads) => {
  const graph = {};
  
  for (let i = 0; i < numRoads; i++) {
    graph[i] = [];
  }
  
  for (let [road1, road2] of roads) {
    graph[road1].push(road2);
    graph[road2].push(road1);
  }
  
  return graph;
};