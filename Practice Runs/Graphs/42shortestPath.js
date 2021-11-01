

// e = number edges
// Time: O(e)
// Space: O(e)

// REMEMBER - SHORTEST PATH - USE BFS!!
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [ [nodeA, 0] ];
  
  while (queue.length) {
    const [src, distance] = queue.shift();
    visited.add(src);
    if (src === nodeB) return distance;
    
    for (let neighbor of graph[src]) {
      if (!visited.has(neighbor)) {
        queue.push( [neighbor, distance + 1] );
      }
    }
  }
  return -1;
};

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



const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

console.log(shortestPath(edges, 'a', 'e')); // -> 3