
// recursive
// Time: O(e)
// Space: O(n)
const hasPath = (graph, src, dst) => {
  // todo
  if (src === dst) return true;
  
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  
  return false;
};


// ----------------------------
// iterative
// Time: O(e) but really O(e^2) bc JS shift()
// Space: O(n)
const hasPath = (graph, src, dst) => {
  // todo
  const queue = [ src ];
  
  while (queue.length) {
    let node = queue.shift();
    if (node === dst) return true;
    
    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
  
  return false;
};













