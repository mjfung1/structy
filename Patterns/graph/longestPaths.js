
// LONGEST PATH            46
// SEMESTER REQUIRED       47
// get terminal node. to determine longest distance 

const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  for (let node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];

  let maxDistance = 0;
  for (let neighbor of graph[node]) {
    const attempt = traverseDistance(graph, neighbor, distance);
    if (attempt > maxDistance) maxDistance = attempt;
  }

  distance[node] = 1 + maxDistance;
  return distance[node];
};



// ------------------------------------- //
// SEMESTER REQUIRED
const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);
  const distance = {};
  
  for (let i = 0; i < numCourses; i += 1) {
    if (graph[i].length === 0) distance[i] = 1;
  }
  
  for (let i = 0; i < numCourses; i += 1) {
    traverseDistance(graph, i, distance)
  }
  
  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];
  
  let maxDistance = 0; 
  for (let neighbor of graph[node]) {
    const neighborDistance = traverseDistance(graph, neighbor, distance);
    if (neighborDistance > maxDistance) maxDistance = neighborDistance;
  }
  
  distance[node] = maxDistance + 1;
  return distance[node];
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }
  
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }
  
  return graph;
};