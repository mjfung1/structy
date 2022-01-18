



const semestersRequired = (numCourses, prereqs) => {
  // todo
  const graph = buildGraph(numCourses, prereqs);
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) distance[node] = 1;
  }
  
  for (let node in graph) {
    dfs(node, graph, distance);  
  };
  
  return Math.max(...Object.values(distance));
};

const dfs = (node, graph, distance) => {
  if (node in distance) return distance[node];
  
  let max = 0;
  for (let neighbor of graph[node]) {
    let attempt = dfs(neighbor, graph, distance);
    max = Math.max(max, attempt);
  }
  
  distance[node] = 1 + max;
  return 1 + max;
};


const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  
  for (let [course1, course2] of prereqs) {
    graph[course2].push(course1);
  }
  
  return graph;
};
