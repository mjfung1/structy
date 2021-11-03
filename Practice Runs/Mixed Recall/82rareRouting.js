
// starting from top node. in this case 0
// undirected.
// make sure not to travel back to parent bc create false cycle
// make sure there is AT LEAST one way to travel to each node
    // if thats the case then its a rare routing;
    
// n = number of nodes
// Time: O(n^2)
// Space: O(n)

const rareRouting = (n, roads) => {
  // todo
  let visited = new Set();
  const graph = graphBuilder(roads);
  const isValid = validate(0, graph, visited, null);
  return isValid && visited.size === n;
};

const validate = (node, graph, visited, prev) => {
  if (visited.has(node)) return false;
  
  visited.add(node);
  
  for (let neighbor of graph[node]) {
    if (neighbor !== prev) {
      if (!validate(neighbor, graph, visited, node)) {
        return false;
      }
    }
  }
  
  return true;
}

const graphBuilder = (roads) => {
  const graph = {};
  
  for (let [road1, road2] of roads) {
    if (!(road1 in graph)) graph[road1] = [];
    if (!(road2 in graph)) graph[road2] = [];
    graph[road1].push(road2);
    graph[road2].push(road1);
  }
  return graph;
};
