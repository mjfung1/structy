
// e = number edges
// time:  O(e)
// space: O(e)

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set(nodeA);
  const queue = [[ nodeA, 0 ]];

  while (queue.length > 0) {
    let [ node, level ] = queue.shift();

    if (node === nodeB) return level;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([ neighbor, level + 1 ]);
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};
