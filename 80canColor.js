
// n = number of nodes
// Time: O(n^2)
// Space: O(n)

const canColor = (graph) => {
  // todo
  let visited = {};
  for (const node in graph) {
    if (!visited[node]) {
      if (!goColor(node, graph, visited, 1)) return false;
    }
  }

  return true;
};

const goColor = (node, graph, visited, color) => {
  if (node in visited) return visited[node] === color;

  visited[node] = color;

  for (let neighbor of graph[node]) {
    if (!goColor(neighbor, graph, visited, -color)) {
      return false;
    }
  }

  return true;
};