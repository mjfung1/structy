
// 104. Maximum Depth of Binary Tree


var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


// --------------------------------------------- //
var maxDepth = function(root) {
    if (!root) return 0;
    let queue = [ root ];
    let depth = 0;
    
    while (queue.length) {
 
        let size = queue.length;
        depth++;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
       
    }
    return depth;
};