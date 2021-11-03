
// e = number of rivalries
// n = number of people
// Time: O(e)
// Space: O(n)

const tolerantTeams = (rivalries) => {
  // todo
  let colored = {};
  const graph = makeGraph(rivalries);
  for (let node in graph) {
    if (!(node in colored)) {
      if (canColor(node, graph, colored, false) === false) return false;
    }
  }
  
  return true;
};

const canColor = (node, graph, colored, color) => {
  if (node in colored) return color === colored[node];
  
  colored[node] = color;
  
  for (let neighbor of graph[node]) {
    if (canColor(neighbor, graph, colored, !color) === false) {
      return false;
    }
  }
  
  return true;
};

const makeGraph = (rivalries) => {
  const graph = {};
  
  for (let [rival1, rival2] of rivalries) {
    if (!(rival1 in graph)) graph[rival1] = [];
    if (!(rival2 in graph)) graph[rival2] = [];
    
    graph[rival1].push(rival2);
    graph[rival2].push(rival1);
  }
  
  return graph;
};