
// e = number of edges
// n = number of nodes
// time:  O(e + n)
// space: O(n)

const topologicalOrder = (graph) => {
  // todo
  const numParents = {};
  
  for (let node in graph) numParents[node] = 0;
  
  for (let node in graph) {
    for (let child of graph[node]) {
      ++numParents[child];
    }
  }
  
  const ready = [];
  for (let node in numParents) {
    if (numParents[node] === 0) ready.push(node);
  }
  
  const order = [];
  
  while (ready.length > 0) {
    let node = ready.pop();
    order.push(node);
    for (let child of graph[node]) {
      numParents[child]--;
      if (numParents[child] === 0) ready.push(child);
    }
  }

  return order;
};





// ----------------------------------- // 
// My implementation
const topologicalOrder = (graph) => {
  // todo
  const leaves = [];
  for (const node in graph) {
    if (graph[node].length === 0) leaves.push(node);
  }
  let output = []
  while (leaves.length) {
    let node = leaves.pop();
    output.push(node);
    for (const neigh in graph) {
      if (graph[neigh].includes(node)) {
        let index = graph[neigh].indexOf(node);
        // console.log(index)
        graph[neigh].splice(index, 1);
        
        if (graph[neigh].length === 0) leaves.push(neigh);
      }
    }
  }
  return output.reverse();
};
