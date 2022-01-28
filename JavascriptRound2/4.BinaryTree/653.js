// 653. Two Sum IV - Input is a BST


var findTarget = function(root, k) {
    const missingNums = new Map();
    
    return findSum(root, k, missingNums);
};

const findSum = (root, k, missingNums) => {
    if (!root) return false;
    
    const neededNum = k - root.val;
    if (missingNums.has( neededNum )) return true;
    missingNums.set(root.val);
    
    const left = findSum(root.left, k, missingNums);
    const right = findSum(root.right, k, missingNums);
    
    return left || right;
};