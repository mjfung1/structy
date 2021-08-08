

// 543. Diameter of Binary Tree

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    
    function getDiameter(root) {
        if (!root) return 0;
        
        let leftDepth = getDiameter(root.left);  
        let rightDepth = getDiameter(root.right);
        
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        return 1 + Math.max(leftDepth, rightDepth);
    };
    
    getDiameter(root);
    
    return maxDiameter;
};