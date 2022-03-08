var diameterOfBinaryTree = function(root) {
    const queue = [ root ];
    let max = 0;
    
    while (queue.length) {
        let node = queue.shift();
        
        let left = findMaxDepth(node.left);
        let right = findMaxDepth(node.right);
        
        max = Math.max(max, left + right)
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return max;
};

const findMaxDepth = (root) => {
    if (!root) return 0;
    
    return 1 + Math.max(findMaxDepth(root.left), findMaxDepth(root.right));
};


// with memoization
var diameterOfBinaryTree = function(root) {
    const queue = [ root ];
    let max = 0;
    let memo = new Map();
    
    while (queue.length) {
        let node = queue.shift();
        
        let left = findLength(node.left, memo);
        let right = findLength(node.right, memo);
        
        max = Math.max(max, left + right)
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return max;
};

const findLength = (root, memo) => {
    if (memo.has(root)) return memo.get(root);
    if (!root) return 0;
    
    let result = 1 + Math.max(findLength(root.left, memo), findLength(root.right, memo));
    
    memo.set(root, result);
    return result;
};