// recursive
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


// ------------------------------
// iterative. with path array
const longestPath = (graph) => {
  // todo
  let queue = [];
  for (let node in graph) {
    queue.push([node, 0, [node]]);
  }
  
  let maxDistance = 0;
  let path;
  while (queue.length) {
    let [ node, distance, arr ] = queue.shift();
    
    // maxDistance = Math.max(maxDistance, distance);
    if (distance > maxDistance) {
      maxDistance = distance;
      path = arr;
    }
    
    for (let neighbor of graph[node]) {
      queue.push([ neighbor, distance + 1 , [...arr, neighbor]]);
    }
  }
  
  return [maxDistance, path];
};


const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};

longestPath(graph); // -> 4