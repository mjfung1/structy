
// 654. Maximum Binary Tree


var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) return null;
    
    let max = -Infinity;
    let maxIdx;
    nums.forEach((num, idx) => {
        if (num > max) {
            max = num;
            maxIdx = idx;
        }
    })
    
    let newNode = new TreeNode(max);
    let leftNums = nums.slice(0, maxIdx);
    let rightNums = nums.slice(maxIdx + 1);
    
    newNode.left = constructMaximumBinaryTree(leftNums);
    newNode.right = constructMaximumBinaryTree(rightNums);
    
    return newNode;
};