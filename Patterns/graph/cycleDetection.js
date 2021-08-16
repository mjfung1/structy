

// 49 Has Cycle
// 50 Prereqs Possible

// white-grey-black algorithm
// visiting vs visited
// if I revisit a visiting node then I have a cycle
const hasCycle = (graph) => {
  const visited = new Set();
  for (let startNode in graph) {
    if (cycleDetect(graph, startNode, new Set(), visited)) return true;
  }
  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;

  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (cycleDetect(graph, neighbor, visiting, visited)) return true;
  }

  visiting.delete(node);
  visited.add(node);
  return false;
};



// -------------------------------- //
const prereqsPossible = (numCourses, prereqs) => {
  const visiting = new Set();
  const visited = new Set();
  
  const graph = buildGraph(numCourses, prereqs);
  for (let node in graph) {
    if (hasCycle(graph, node, visiting, visited)) {
      return false;
    }
  }
  
  return true;
};

const hasCycle = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  
  if (visiting.has(node)) return true;
  
  visiting.add(node);
  
  for (let neighbor of graph[node]) {
    if (hasCycle(graph, neighbor, visiting, visited)) {
      return true;    
    }
  }
  
  visiting.delete(node);
  visited.add(node);
  
  return false;
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }
  
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(String(b));
  }
  
  return graph;
};
