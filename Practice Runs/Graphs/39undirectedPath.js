
// Time: O(e)
// Space: O(n)

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());

};

const hasPath = (graph, src, dst, visited) => {
  if (visited.has(src)) return;
  if (src === dst) return true;
  
  visited.add(src);
  
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  
  return false;
}

const buildGraph = (edges) => {
  const graph = {};
  
  for (let [node1, node2] of edges) {
    if (!(node1 in graph)) graph[node1] = [];
    if (!(node2 in graph)) graph[node2] = [];
    
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  
  return graph;
};


