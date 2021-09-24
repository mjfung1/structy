
// 617. Merge Two Binary Trees


var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) return null;
    
    if (!root1) root1 = new TreeNode(0);
    if (!root2) root2 = new TreeNode(0);
    
    root1.val = root1.val + root2.val
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    
    return root1;
};