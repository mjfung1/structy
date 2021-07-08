

const undirectedPath = (edges, nodeA, nodeB) => {
  let graph = graphBuilder(edges);
  let visited = new Set();
  return pathFinder(graph, nodeA, nodeB, visited);
};

const pathFinder = (graph, start, end, visited) => {
  visited.add(start);
  if (start === end) return true;
  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      if (pathFinder(graph, neighbor, end, visited)) return true;
    }
  }
  return false;
};

// ANOTHER WAY TO WRITE IT.

// const pathFinder = (graph, start, end, visited) => {
//   if (visited.has(start)) return;
//   if (start === end) return true;
//   visited.add(start);

//   for (let neighbor of graph[start]) {
//     if (pathFinder(graph, neighbor, end, visited)) return true;
//   }

//   return false;
// };

const graphBuilder = (edges) => {
  let graph = {};

  for (let edge of edges) {
    const [vertex1, vertex2] = edge;
    if (!graph[vertex1]) graph[vertex1] = [];
    if (!graph[vertex2]) graph[vertex2] = [];

    graph[vertex1].push(vertex2);
    graph[vertex2].push(vertex1);
  }

  return graph;
};