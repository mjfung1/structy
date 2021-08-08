
// 437. Path Sum III


var pathSum = function(root, targetSum) {
    let count = 0;
    
    const traverse = (root, targetSum) => {
        if (!root) return;
    
        findSum(root, targetSum);
        traverse(root.left, targetSum);
        traverse(root.right, targetSum);
    };

    const findSum = (root, targetSum) => {
        if (!root) return;
        if (targetSum === root.val) count++;
        
        findSum(root.left, targetSum - root.val);
        findSum(root.right, targetSum - root.val);
    };
    
    
    traverse(root, targetSum);
    return count;
};