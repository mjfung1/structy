// p = # prereqs
// n = # courses
// time:  O(p)
// space: O(n)

const prereqsPossible = (numCourses, prereqs) => {
  // todo
  const graph = graphBuilder(prereqs);
  console.log(graph);
  const visiting = new Set();
  const visited = new Set();

  for (const course in graph) {
    if (cycleDetector(course, graph, visiting, visited)) return false;
  }
  return true;
};

const cycleDetector = (course, graph, visiting, visited) => {
  if (visiting.has(course)) return true;
  if (visited.has(course)) return false;

  visiting.add(course);

  for (let neighbor of graph[course]) {
    if (cycleDetector(neighbor, graph, visiting, visited)) return true;
  }

  visiting.delete(course);
  visited.add(course);

  return false;
};

const graphBuilder = (prereqs) => {
  const graph = {};

  for (const [prereq, course] of prereqs) {
    if (!(prereq in graph)) graph[prereq] = [];
    if (!(course in graph)) graph[course] = [];

    //why convert to string.
    // bc we use a for in loop for the graph;
    // keys in objects are STRINGS OR SYMBOLS;
    graph[course].push(String(prereq));
  }

  return graph;
};
