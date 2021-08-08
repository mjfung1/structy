
// 145. Binary Tree Postorder Traversal


var postorderTraversal = function(root) {
    if (!root) return [];
    let left = postorderTraversal(root.left);
    let right = postorderTraversal(root.right);
    
    return [...left, ...right, root.val];
};