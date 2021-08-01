// 1584. Min Cost to Connect All Points


// Prims Algorithm
// time:  n^2 log(n);

var minCostConnectPoints = function(points) {
    let length = points.length;
    
    // set up ///
    let adj = {};
    //naming each point from 0 to length-1;
    for (let point = 0; point < length; point++) {
        adj[point] = [];
    }
    
    for (let point1 = 0; point1 < length; point1++) {
        let [x1, y1] = points[point1];
        
        for (let point2 = point1+1; point2 < length; point2++) {
            let [x2, y2] = points[point2];
            
            let manhattanDistance = Math.abs(x1-x2) + Math.abs(y1-y2);
            adj[point1].push([manhattanDistance, String(point2)]);
            adj[point2].push([manhattanDistance, String(point1)]);
        }
    }
    
    console.log(adj)
    // Prim's Algorithm.  
    let result = 0;
    let visited = new Set();
    let minpq = new MinPriorityQueue();
    minpq.enqueue('0', 0);
    
    while (visited.size < length) {
        let point = minpq.dequeue();
        
        if (visited.has(point.element)) continue;
        result += point.priority;
        visited.add(point.element);
        
        for (let [neighborCost, neighbor] of adj[point.element]) {
            
            if (!visited.has(neighbor)) {
                minpq.enqueue(neighbor, neighborCost);
            }
        }
        
    }
    return result;
    
};