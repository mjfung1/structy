
// 112. Path Sum


var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    // we have reached a terminal node; no left && right;
    if (!root.left && !root.right && targetSum === root.val) return true;
    
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};



// ---------------------------------------- //

var hasPathSum = function(root, targetSum) {
    // if (!root) return [];
    let res = false;
    
    function dfs(node, target) {
        if (!node) return;
        if (!node.left && !node.right && node.val === target) res = true;
        
        dfs(node.left, target - node.val);
        dfs(node.right, target - node.val);
    
    }
    
    
    dfs(root, targetSum)
    return res;
};