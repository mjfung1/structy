

// 2096. Step-By-Step Directions From a Binary Tree Node to Another

var getDirections = function(root, startValue, destValue) {
    const graph = buildGraph(root);
    let visited = new Set();
    
    const queue = [ [startValue, ''] ];
    
    while (queue.length) {
        let [node, direction] = queue.shift();
        
        if (node === destValue) {
            return direction;
        }
        
        visited.add(node);
        
        for (let [neighbor, dir] of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push([ neighbor, direction + dir ]);
                
            }
        }
    }
};

const buildGraph = (root) => {
    const graph = {};
    
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node.left) {
            if (!(node.left.val in graph)) graph[node.left.val] = [];
            graph[node.left.val].push([ node.val, 'U' ]);
            
            if (!(node.val in graph)) graph[node.val] = [];
            graph[node.val].push([ node.left.val, 'L' ]);
            
            queue.push(node.left);
        }
        
        if (node.right) {
            if (!(node.right.val in graph)) graph[node.right.val] = [];
            graph[node.right.val].push([ node.val, 'U' ]);
            
            if (!(node.val in graph)) graph[node.val] = [];
            graph[node.val].push([ node.right.val, 'R' ]);
            
            queue.push(node.right);
        }
    }
    
    return graph;
};