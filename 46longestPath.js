// e = # edges
// n = # nodes
// time:  O(e)
// space: O(n)

const longestPath = (graph) => {
  // todo
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) distance[node] = 0;
  }

  for (let node in graph) {
    traverse(node, graph, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverse = (node, graph, distance) => {
  if (node in distance) return distance[node];

  let max = 0;
  for (let neighbor of graph[node]) {
    let attempt = traverse(neighbor, graph, distance);
    if (attempt > max) max = attempt;
  }

  distance[node] = 1 + max;
  return distance[node];
};