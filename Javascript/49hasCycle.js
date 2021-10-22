
// n = number of nodes
// e = number of edges
// approach says time should be O(e)
// time:  O(n^2)
// space: O(n)

const hasCycle = (graph) => {
  // todo
  // Why does this work?? without using visited vs visiting logic aka 
  // white-grey-black algo.?? 
  // Answer: we're passing a new visited set to dfs function everytime. so 
  // every node start unvisited. no previous visitations that would return a 
  // false cycle
  // downside: creates a new set at every stack. and visiting nodes multiple times;
  for (const node in graph) {
    if (dfs(node, graph, new Set())) return true;
  }
  return false
  
};

const dfs = (node, graph, visited) => {
  if (visited.has(node)) return true;
  
  visited.add(node)
  for (let neighbor of graph[node]) {
    return dfs(neighbor, graph, visited);
  }
  
  return false;
};


// ----------------------------------------------- //

const hasCycle = (graph) => {
  // todo
  const visited = {};
  // -1 for        visiting;
  // 1 for         visited;
  // undefined for unvisited;
  
  // for loop to hit every node
  for (const node in  graph) {
    if (cycleDetector(node, graph, visited)) return true;
  }
  
  return false;
};

const cycleDetector = (node, graph, visited) => {
  // previously visited
  if (visited[node] === 1) return false;
  
  // currently visiting
  if (visited[node] === -1) return true;
  
  visited[node] = -1;
  
  for (const neighbor of graph[node]) {
    if (cycleDetector(neighbor, graph, visited)) return true;
  }
  
  // after for loop - finish visiting
  visited[node] = 1
  
  return false;
};

// ----------------------------------------------- //

const hasCycle = (graph) => {
  // todo
  const visited = new Set();
  const visiting = new Set();
  
  for (const node in  graph) {
    if (cycleDetector(node, graph, visited, visiting)) return true;
  }
  
  return false;
};

const cycleDetector = (node, graph, visited, visiting) => {
  if (visited.has(node)) return false;
  
  if (visiting.has(node)) return true;
  
  visiting.add(node);
  
  for (const neighbor of graph[node]) {
    if (cycleDetector(neighbor, graph, visited, visiting)) return true;
  }
  
  visiting.delete(node);
  visited.add(node);
  
  return false;
};