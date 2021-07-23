
// n = number of nodes
// Time: O(n^2)
// Space: O(n)

const rareRouting = (n, roads) => {
  // todo
  const graph = buildGraph(roads);
  let visited = new Set();
  let prev = null;
  const isValid = validate("0", graph, visited, prev);
  return isValid && visited.size === n;
};

const validate = (node, graph, visited, prevNode) => {
  if (visited.has(node)) return false;
  visited.add(node);

  for (let neighbor of graph[node]) {
    if (neighbor !== prevNode) {
      if (validate(neighbor, graph, visited, node) === false) return false;
    }
  }
  return true;
};

const buildGraph = (roads) => {
  const graph = {};

  for (const [road1, road2] of roads) {
    if (!graph[road1]) graph[road1] = [];
    if (!graph[road2]) graph[road2] = [];

    graph[road1].push(String(road2));
    graph[road2].push(String(road1));
  }

  return graph;
};
