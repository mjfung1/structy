
// Time: O(e)
// Space: O(n)

const connectedComponentsCount = (graph) => {
  let count = 0;
  let visited = new Set();
  
  for (let node in graph) {
    node = Number(node);
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  
  return count;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);
  
  for (let neighbor of graph[node]) {
    explore(graph, neighbor, visited);
  }

  return true;
};


console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
})); // -> 2
