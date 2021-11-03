

// white-grey-black algorithm
// n = number of nodes
// Time: O(n^2)
// Space: O(n)

const hasCycle = (graph) => {
  let visited = new Set();
  let visiting = new Set();
  
  for (let node in graph) {
    if (detectCycle(graph, node, visited, visiting)) return true;
  }
  
  return false;
};

const detectCycle = (graph, node, visited, visiting) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  
  visiting.add(node);
  
  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, visited, visiting)) {
      return true;
    }
  }
  
  visiting.delete(node);
  visited.add(node);
  return false;
};