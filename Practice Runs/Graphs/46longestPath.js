
// e = # edges
// n = # nodes
// Time: O(e)
// Space: O(n)

const longestPath = (graph) => {
  // todo
  const distance = {};
  
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }
  
  for (let node in graph) {
    getDistance(node, graph, distance);
  }
  
  return Math.max(...Object.values(distance));
};

const getDistance = (node, graph, distance) => {
  if (node in distance) return distance[node];
  
  for (let neighbor of graph[node]) {
    let dist = 1 + getDistance(neighbor, graph, distance);
    if (!(node in distance)) {
      distance[node] = dist;
    } else {
      distance[node] = Math.max(distance[node], dist);
    }
  }
  
  return distance[node];
};