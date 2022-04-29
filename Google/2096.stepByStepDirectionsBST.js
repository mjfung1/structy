

// 2096. Step-By-Step Directions From a Binary Tree Node to Another

// build graph
// use queue for bfs to find shortest path.
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


// create pointer to parent. faster than creating graph on leetcode
// then bfs to find shortest path

var getDirections = function(root, startValue, destValue) {
    
    let start;
    const dfs = (root) => {
        
        if (root.left) {
            root.left.parent = root;
            dfs(root.left);
        }
        
        if (root.right) {
            root.right.parent = root;
            dfs(root.right);
        }
        
        if (startValue === root.val) start = root;
    };
    
    dfs(root);
    
    const queue = [ [start, ''] ];
    const visited = new Set();
    
    while (queue.length) {
        let [ node, direction ] = queue.shift();
        
        if (node.val === destValue) return direction;
        
        visited.add(node.val);
        
        if (node.left && !visited.has(node.left.val)) {
            queue.push([node.left, direction + 'L']);
        }
        if (node.right && !visited.has(node.right.val)) {
            queue.push([node.right, direction + 'R']);
        }
        if (node.parent && !visited.has(node.parent.val)) {
            queue.push([node.parent, direction + 'U']);
        }
    }
    
};