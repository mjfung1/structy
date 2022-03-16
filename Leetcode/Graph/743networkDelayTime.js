
// 743. Network Delay Time
// dijkstras algorithm. shortest path with weighted edges.


var networkDelayTime = function(times, n, k) {
    const graph = graphbuilder(times, n);
    const distances = {};
    
    for (let node in graph) {
        distances[node] = Infinity;
    }
    
    distances[k] = 0;
    
    let unvisited = new Set(Object.keys(graph));
    
    while (unvisited.size) {
        let smallestDistanceNode = getSmallest(unvisited, distances);
        unvisited.delete(smallestDistanceNode);
  
        for (let neighbor in graph[smallestDistanceNode]) {
            let neighborDistance = graph[smallestDistanceNode][neighbor];
            let totalDistance = distances[smallestDistanceNode] + neighborDistance;
          
            if (distances[neighbor] > totalDistance) {
                distances[neighbor] = totalDistance;
            }
        }
    }
    
    let max = Math.max(...Object.values(distances));
    
    if (max === Infinity) {
        return -1;
    } else {
        return max;
    }
};

const getSmallest = (unvisited, distances) => {
  return Array.from(unvisited).reduce((node, nextNode) => {
      if (distances[nextNode] < distances[node]) {
          return nextNode;
      } else {
          return node;
      }
  })  
};

const graphbuilder = (times, n) => {
    const graph = {};
    
    for (let i = 1; i <= n; i++) {
        graph[i] = {};
    }
    
    for (let time of times) {
        const [src, dst, wgt] = time;
        
        graph[src][dst] = wgt;
    }
    
    return graph;
};