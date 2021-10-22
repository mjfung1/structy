
// e = number of rivalries
// n = number of people
// time:  O(e)
// space: O(n)

const tolerantTeams = (rivalries) => {
  // todo
  const graph = buildGraph(rivalries);
  const coloring = {};

  for (const person in graph) {
    // CAREFUL - BETTER TO USE NODE IN OBJECT - checks for presence of key
    // BECAUSE OF FALSEY VALUES; OBJECT[NODE] - checks for value;
    if (!coloring[person]) {
      if (!valid(person, graph, coloring, 1)) return false;
    }
  }
  return true;
};

const valid = (node, graph, coloring, currentColor) => {
  if (node in coloring) return coloring[node] === currentColor;
  coloring[node] = currentColor;

  for (let neighbor of graph[node]) {
    if (!valid(neighbor, graph, coloring, -currentColor)) return false;
  }

  return true;
};

const buildGraph = (rivalries) => {
  const graph = {};

  for (const [notMyFriend, notMyPal] of rivalries) {
    if (!graph[notMyFriend]) graph[notMyFriend] = [];
    if (!graph[notMyPal]) graph[notMyPal] = [];

    graph[notMyFriend].push(notMyPal);
    graph[notMyPal].push(notMyFriend);
  }

  return graph;
};




