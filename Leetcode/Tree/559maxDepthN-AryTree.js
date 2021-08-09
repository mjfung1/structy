
// 559. Maximum Depth of N-ary Tree

var maxDepth = function(root) {
    if (!root) return 0;
    
    let depth = 0;
    
    root.children.forEach(child => {
        let result = maxDepth(child);
        depth = Math.max(depth, result);
    })
    
    return 1 + depth;
};


// ----------------------------------- //
var maxDepth = function(root) {
    if (!root) return 0;
    
    let depth = 0;
    
    let queue = [ root ];
    
    while (queue.length) {
        let size = queue.length;
        depth++;
        
        while (size--) {
            const node = queue.shift();
            node.children && queue.push(...node.children);
        }
    }
    
    return depth;
};