


// 133. Clone Graph


var cloneGraph = function(node, seen={}) {
    if (!node) return null;
    
    const copyNode = new Node(node.val);
    seen[node.val] = copyNode;
    const copyNeighbors = [];
    
    for (let neighbor of node.neighbors) {
        if (!(neighbor.val in seen)) {
            copyNeighbors.push(cloneGraph(neighbor, seen))
        } else {
            copyNeighbors.push(seen[neighbor.val]);
        }
    }
    
    copyNode.neighbors = copyNeighbors;
    return copyNode;
    
};