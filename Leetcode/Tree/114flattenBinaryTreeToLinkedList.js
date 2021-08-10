

// 114. Flatten Binary Tree to Linked List


var flatten = function(root) {
    let values = [];
    
    preorder(root, values);
        
    let tail = root;
    
    for (let i = 1; i < values.length; i++) {
        let value = values[i];
        tail.right = new TreeNode(value);
        tail.left = null;
        tail = tail.right;
    } 
};

const preorder = (root, values) => {
  if (!root) return;
    
  values.push(root.val);
  preorder(root.left, values);
  preorder(root.right, values);
};