
// Time: O(e)
// Space: O(n)

const largestComponent = (graph) => {
  // todo
  let largest = 0;
  let visited = new Set()
  for (let node in graph) {
    let size = explore(graph, node, visited);
    if (size > largest) largest = size;
  }
  
  return largest;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  
  visited.add(node);
  
  let size = 1;
  for (let neighbor of graph[node]) {
    size += explore(graph, neighbor, visited);
  }
  
  return size;
};