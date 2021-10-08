
// 547. Number of Provinces

var findCircleNum = function(isConnected) {
    // turn into adjacency list
    let numProvinces = 0
    
    const graph = buildGraph(isConnected);
    let visited = new Set();
    for (let city in graph) {
        if (!visited.has(city)) {
            numProvinces++;
            dfs(graph, visited, city);
        }
    }
    
    return numProvinces;
};

const dfs = (graph, visited, city) => {
    if (visited.has(city)) return;
    
    visited.add(city);
    
    graph[city].forEach( (neighborCity) => {
        dfs(graph, visited, neighborCity);
    })
};

const buildGraph = (grid) => {
    const graph = {};
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let city1 = row + 1;
            let city2 = col + 1;
            if (grid[row][col] === 1) {
                if (!(city1 in graph)) graph[city1] = new Set();
                if (!(city2 in graph)) graph[city2] = new Set();
                graph[city1].add(String(city2));
                graph[city2].add(String(city1));

            }
        }
    }
    
    return graph;
};
