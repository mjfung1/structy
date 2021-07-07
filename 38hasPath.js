

const hasPath = (graph, src, dst) => {
  // todo
  const visited = {};
  let output = false;

  function dfs(node) {
    if (!visited[src]) visited[node] = true;
    if (node === dst) return output = true;
    let neighbors = graph[node];
    neighbors.forEach(neighbor => {
      if (!visited[neighbor]) dfs(neighbor);
    })
  }

  dfs(src);
  return output;
};

// ---------------------------------- //

const hasPath = (graph, src, dst) => {
  // todo
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true;
  }

  return false;
};
