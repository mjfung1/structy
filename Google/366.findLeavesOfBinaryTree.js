


// 366. Find Leaves of Binary Tree
// medium
// dfs to get level (height).  starts pushing values when reaches a leaf.


var findLeaves = function(root) {
    const output = [];
    
    getLeaves(root, output);
    
    return output;
};

const getLeaves = (root, leaves) => {
    if (root === null) return -1;
    
    let left = getLeaves(root.left, leaves);
    let right = getLeaves(root.right, leaves);
    
    let level = 1 + Math.max(left, right);
    
    if (!(level in leaves)) leaves[level] = [];
    
    leaves[level].push(root.val);
    
    return level;
};