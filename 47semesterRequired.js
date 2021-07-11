

// TOPOLOGICAL SORT
const semestersRequired = (numCourses, prereqs) => {
  // todo
  const graph = {};
  for (let course = 0; course < numCourses; course++) {
    graph[course] = new Set();
  }
  for (const [prereq, course] of prereqs) {
    graph[course].add(prereq);
  }

  const leaves = [];
  for (const course in graph) {
    if (graph[course].size === 0) leaves.push(Number(course));
  }

  let numOfSemesters = 0;
  while (leaves.length) {
    let size = leaves.length;
    while (size--) {
      let noPrereq = leaves.shift();

      for (let [prereq, course] of prereqs) {
        if (prereq === noPrereq) {
          graph[course].delete(prereq);

          if (graph[course].size === 0) leaves.push(course);
        }
      }
    }
    numOfSemesters++;
  }

  return numOfSemesters;
};


// ------------------------------------------- //
const semestersRequired = (numCourses, prereqs) => {
  // todo
  const indegrees = Array(numCourses).fill(0);

  for (const [prereq, course] of prereqs) {
    indegrees[course]++;
  }

  const leaves = [];
  for (let course = 0; course < numCourses; course++) {
    if (indegrees[course] === 0) leaves.push(course);
  }

  let numOfSemesters = 0;
  while (leaves.length) {
    let size = leaves.length;
    while (size--) {
      let noPrereq = leaves.shift();

      for (let [prereq, course] of prereqs) {
        if (prereq === noPrereq) {
          indegrees[course]--;

          if (indegrees[course] === 0) leaves.push(course);
        }
      }
    }
    numOfSemesters++;
  }

  return numOfSemesters;
};


// ------------------------------------------- //

// DFS
// p = # prereqs
// c = # courses
// time:  O(p)
// space: O(c)
const semestersRequired = (numCourses, prereqs) => {
  // todo
  const graph = buildGraph(numCourses, prereqs);
  const distance = {};

  for (const course in graph) {
    if (graph[course].length === 0) distance[course] = 1;
  }

  for (let course = 0; course < numCourses; course++) {
    traverse(course, graph, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverse = (course, graph, distance) => {
  if (course in distance) return distance[course];

  let longestPath = 1;

  for (let prereq of graph[course]) {
    let semester = traverse(prereq, graph, distance);
    if (semester > longestPath) longestPath = semester;
  }

  distance[course] = 1 + longestPath;
  return distance[course];
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let course = 0; course < numCourses; course++) {
    graph[course] = [];
  }

  for (const [prereq, course] of prereqs) {
    graph[prereq].push(course);
  }

  return graph;
};









