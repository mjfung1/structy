


// warning!!! wasted 30 mins!!!! lesson learned;
// do not use hash object bc javascript does not store objects as keys
// use map!!!!
var rob = function(root, memo = new Map()) {
    if (!root) return 0;
    if(!root.left && !root.right) return root.val;

    if (memo.has(root)) return memo.get(root);
    
    let excludeRoot = rob(root.left, memo) + rob(root.right, memo);
    
    let includeRoot = root.val;
    // need to initialize to zero if no root.left or root.right
    let grandLeft = 0;
    let grandRight = 0;
    
    if (root.left) grandLeft = rob(root.left.left, memo) + rob(root.left.right, memo);
    if (root.right) grandRight = rob(root.right.left, memo) + rob(root.right.right, memo);
    includeRoot += (grandLeft + grandRight);
    
    let maxRobbery = Math.max(excludeRoot, includeRoot);
    
    memo.set(root, maxRobbery);
    
    return memo.get(root);
};