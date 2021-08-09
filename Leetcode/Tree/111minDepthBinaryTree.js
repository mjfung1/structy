
// 111. Minimum Depth of Binary Tree


var minDepth = function(root) {
    if (!root) return 0;
    let queue = [ root ];
    let depth = 0 // usually the depth for root is 0;
    
    while (queue.length) {
 
        let size = queue.length;
        depth++;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (!node.left && !node.right) return (depth);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
       
    }
};


// ----------------------------------------- //

var minDepth = function(root) {
    if (root === null) return 0;
    if (root.left === null) {
        return 1 + minDepth(root.right);
    } else if (root.right === null) {
        return 1 + minDepth(root.left)
    }
    
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    
};