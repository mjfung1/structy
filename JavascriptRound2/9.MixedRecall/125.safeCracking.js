

const safeCracking = (hints) => {
  // todo
  const graph = graphBuilder(hints);
  
  const numParents = {};
  for (let node in graph) {
    numParents[node] = 0;
  }
  
  for (let node in graph) {
    for (let child of graph[node]) {
      numParents[child] += 1;
    }
  }
  
  const ready = [];
  for (let node in numParents) {
    if (numParents[node] === 0) {
      ready.push(node);
    }
  }
  
  const output = [];
  while (ready.length) {
    const node = ready.pop();
    
    output.push(node);
    
    for (let child of graph[node]) {
      numParents[child]--;
      if (numParents[child] === 0) {
        ready.push(child);
      }
    }
  }
  
  return output.join('');
};

const graphBuilder = (hints) => {
  const graph = {};
  
  for (let [hint1, hint2] of hints) {
    if (!(hint1 in graph)) graph[hint1] = [];
    if (!(hint2 in graph)) graph[hint2] = [];
    
    graph[hint1].push(String(hint2));
  }
  
  return graph;
};




