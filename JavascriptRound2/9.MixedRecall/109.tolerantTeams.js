

const tolerantTeams = (rivalries) => {
  // todo
  const graph = buildGraph(rivalries);
  const coloring = new Map();
  
  for (let node in graph) {
    if (!coloring.has(node)) {
      if (isValid(graph, node, coloring, false) === false) {
        return false;
      }
    }
  }
  
  return true;
};

const isValid = (graph, node, coloring, color) => {
  if (coloring.has(node)) return coloring.get(node) === color;
  coloring.set(node, color);
  
  for (let neighbor of graph[node]) {
    if (isValid(graph, neighbor, coloring, !color) === false){
      return false;
    }
  }
  
  return true;
};


const buildGraph = (array) => {
  const graph = {};
  
  for (let subarray of array) {
    const [rival1, rival2] = subarray;
    if (!(rival1 in graph)) graph[rival1] = [];
    if (!(rival2 in graph)) graph[rival2] = [];
    
    graph[rival2].push(rival1);
    graph[rival1].push(rival2);
  }
  
  return graph;
};
