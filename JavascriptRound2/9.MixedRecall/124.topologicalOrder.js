

const topologicalOrder = (graph) => {
  // todo
  const numParents = {};
  for (let node in graph) {
    numParents[node] = 0;
  }
  
  for (let node in graph) {
    for (let child of graph[node]) {
      numParents[child] += 1;
    }
  }
  
  const leaves = [];
  for (let node in graph) {
    if (numParents[node] === 0) leaves.push(node);
  }
  
  const output = [];
  while (leaves.length) {
    let node = leaves.pop();
    output.push(node);
    
    for (let child of graph[node]) {
      numParents[child] -= 1;
      if (numParents[child] === 0) leaves.push(child);
    }
  }
  
  return output;
};