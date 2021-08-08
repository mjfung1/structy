
// 124. Binary Tree Maximum Path Sum


var maxPathSum = function(root) {
    let max = -Infinity;
    
    const findSum = (root) => {
        
        if (!root) return 0;
        
        let left = Math.max(0, findSum(root.left));
        let right = Math.max(0, findSum(root.right));
        
        max = Math.max(max, root.val + left + right);
        return Math.max(left, right) + root.val;
    };
    
    
    findSum(root);
    return max;
};