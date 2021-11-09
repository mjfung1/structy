
// 333. Largest BST Subtree

// put in queue;
// find if is valid bst
    // if valid find size
    // update largest

var largestBSTSubtree = function(root) {
    if (!root) return 0;
    const queue = [ root ];
    let largest = 0;
   
    while (queue.length) {
        let node = queue.shift();
        
        if (isBst(node)) {
            let size = findSize(node);
            largest = Math.max(largest, size);
        }
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return largest;
};

const findSize = (node) => {
    if (!node) return 0;
    return 1 + findSize(node.left) + findSize(node.right);
};


const isBst = (node, min=-Infinity, max=Infinity) => {
    if (!node) return true;
    if (node.val >= max || node.val <= min) return false;
    
    let left = isBst(node.left, min, node.val);
    let right = isBst(node.right, node.val, max);
    
    return left && right;
}