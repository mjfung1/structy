

// iterative.  Using a queue. Less mental strain to implement.

const longestPath = (graph) => {
  // todo
  const queue = [];
  let maxDistance = 0;
  
  for (let node in graph) {
    queue.push([ node, 0 ]);
  }
  
  while (queue.length) {
    const [ node, distance ] = queue.shift();
    
    maxDistance = Math.max(maxDistance, distance);
    
    for (let neighbor of graph[node]) {
      queue.push( [ neighbor, distance + 1 ]);
    }
  }
  
  return maxDistance;
};
