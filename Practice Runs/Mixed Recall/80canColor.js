
// Graph Bipartite
// n = number of nodes
// Time: O(n^2)
// Space: O(n)

const canColor = (graph) => {
  // todo
  let colored = {};
  
  for (let node in graph) {
    if (!(node in colored)) {
      if (isPossible(node, graph, colored, false) === false) {
        return false;
      }
    }
  }
  
  return true;
};

const isPossible = (node, graph, colored, color) => {
  if (node in colored) return color === colored[node];
  
  colored[node] = color;
  
  for (let neighbor of graph[node]) {
    if (isPossible(neighbor, graph, colored, !color) === false) return false;
  }
  
  return true;
}
