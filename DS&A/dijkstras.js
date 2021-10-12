
const dijkstras = (graph, source) => {
    //distance object. initialize to infinity
    const distance = {};
    for (let node in graph) distance[node] = Infinity;
    distance[source] = 0;

    // unvisited set
    const unvisited = new Set(Object.keys(graph));
    // previous paths 
    const previous = {};

    // iterate while unvisited has nodes
    while (unvisited.size > 0) {

        // get node with smallest distance;
        let minDistanceNode = getSmallest(distance, unvisited);
        // delete node from visited b/c visited. duh!
        unvisited.delete(minDistanceNode);

        for (let neighbor in graph[minDistanceNode]) {
            let neighborDistance = graph[minDistanceNode][neighbor];
            let totalDistance = distance[minDistanceNode] + neighborDistance;

            // if totalDistance is less than previously marked update it;
            // this is key. only runs when total distance is less
            if (totalDistance < distance[neighbor]) {
                // update distance
                distance[neighbor] = totalDistance;
                // previous path to neighbor
                previous[neighbor] = minDistanceNode;
            }
        }
    }
    // console.log(distance, previous)
    return {distance, previous};
};

// only want to get distance of unvisited
const getSmallest = (distance, unvisited) => {
    return Array.from(unvisited).reduce( (node1, node2) => {
        if (distance[node1] < distance[node2]) {
            return node1;
        } else {
            return node2;
        }
    })
};

// let un = new Set(['a', 'b', 'c']);
// let dist = {'a': 1, 'b': 2, 'c': 3};
// console.log(getSmallest(dist, un))

let graph = {
    'a': {'c': 1, 'b': 7},
    'b': {'a': 7, 'd': 12, 'e': 13},
    'c': {'a': 1, 'd': 20, 'f': 4},
    'd': {'b': 12, 'c': 20, 'e': 5},
    'e': {'b': 13, 'd': 5, 'f': 9},
    'f': {'c': 4, 'e': 9}
};

console.log(dijkstras(graph, 'a'));