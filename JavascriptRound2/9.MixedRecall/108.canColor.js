const canColor = (graph) => {
  // todo
  const coloring = {};
  for (let node in graph) {
    if (!(node in coloring)) {
      if (valid(graph, node, coloring, false) === false) {
        return false;
      };
      
    }
  }
  
  return true;
};

const valid = (graph, node, coloring, color) => {
  if (node in coloring) return coloring[node] === color;
  
  coloring[node] = color;
  
  for (let neighbor of graph[node]) {
    
    if (valid(graph, neighbor, coloring, !color) === false) return false;
  }
  
  return true;
};
