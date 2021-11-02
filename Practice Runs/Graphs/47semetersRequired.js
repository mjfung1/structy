
// iterative

const semestersRequired = (numCourses, prereqs) => {
  // todo
  if (prereqs.length === 0) return 1;
  const graph = buildGraph(prereqs);
  const queue = [];
  
  for (let i = 0; i < numCourses; i++) {
      queue.push([i, 1]);
  }
  
  let numSemesters = 0;
  while (queue.length) {
    let [course, semesterYear] = queue.shift();
    
    numSemesters = Math.max(numSemesters, semesterYear);
    
    for (let neighbor of graph[course]) {
      queue.push([neighbor, semesterYear + 1]);
    }
    
  }
  
  return numSemesters;
};

const buildGraph = (prereqs) => {
  const graph = {};
  
  for (let [a, b] of prereqs) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    
    graph[a].push(b);
  }
  
  return graph;
};


// ------------------------------------------------
// recursive
const semestersRequired = (numCourses, prereqs) => {
  // todo
  if (prereqs.length === 0) return 1;
  const graph = buildGraph(prereqs);
  let distance = {};
  for (let course = 0; course < numCourses; course++) {
    if (graph[course].length === 0) distance[course] = 1;
  }
  
  for (let course = 0; course < numCourses; course++) {
    traverse(graph, course, distance);
  }
 
  return Math.max(...Object.values(distance));
};


const traverse = (graph, node, distance) => {
  if (node in distance) return distance[node];
  
  let maxDistance = 1;
  for (let neighbor of graph[node]) {
    let attemt = traverse(graph, neighbor, distance);
    if (attemt > maxDistance) maxDistance = attemt;
  }
  
  distance[node] = 1 + maxDistance;
  return distance[node];
};


const buildGraph = (prereqs) => {
  const graph = {};
  
  for (let [a, b] of prereqs) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    
    graph[a].push(b);
  }
  
  return graph;
};
