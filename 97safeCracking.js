
// e = number of hints
// time:  O(e)
// space: O(e)

const safeCracking = (hints) => {
  // todo
  const graph = buildGraph(hints);  
  return topologicalOrder(graph);
};


const topologicalOrder = (graph) => {
  const numParents = {};
  for (let node in graph) {
    numParents[node] = 0;
  }
  
  for (let node in graph) {
    for (let children of graph[node]) {
      numParents[children] += 1;
    }
  }
  
  const ready = [];
  for (const node in numParents) {
    if (!numParents[node]) ready.push(node);
  }
  
  let order = '';
  
  while (ready.length) {
    let node = ready.pop();
    order += node;
    for (let child of graph[node]) {
      numParents[child]--;
      if (numParents[child] === 0) ready.push(child);
    }
  }
  
  return order;
};

const buildGraph = (edges) => {
  const graph = {};
  
  for (const [node1, node2] of edges) {
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];
    
    graph[node1].push(String(node2));
  }
  
  return graph;
};



