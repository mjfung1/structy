

// 99. Recover Binary Search Tree


var recoverTree = function(root) {
    const values = [];
    
    inorder(root, values);
    
    let sortedValues = values.map(node => node.val).sort((a,b) => a - b);
    for (let i = 0; i < values.length; i++) {
        values[i].val = sortedValues[i];
    }
    

    return root;
};


const inorder = (root, values) => {
  if (!root) return;

    inorder(root.left, values);
    values.push(root);
    inorder(root.right, values);
};