

// 797. All Paths From Source to Target


var allPathsSourceTarget = function(graph) {
    return getPath(0, graph.length - 1, graph);
};

const getPath = (src, dst, graph) => {
    if (src === dst) return [  [ dst ] ];
    
    let paths = [];
    for (let neighbor of graph[src]) {
        let path = getPath(neighbor, dst, graph);
        path.map(sub => paths.push([ src, ...sub ]));
    }
    
    return paths;
};