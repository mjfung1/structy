
// 99. Recover Binary Search Tree


var recoverTree = function(root) {
    let values = [];
    
    inorder(root, values);
    let set = [];
    
    let sorted = [...values].sort((a,b) => a.val-b.val);
    
    for (let i = 0; i < values.length; i++) {
        let val1 = values[i].val;
        let val2 = sorted[i].val;
        
        if (val1 !== val2) {
            set.push(values[i]);
        }
    }
    
    const [node1, node2] = set;
    
    [node1.val, node2.val] = [node2.val, node1.val];
  
};


const inorder = (root, values) => {
    if (!root) return;
    
    inorder(root.left, values);
    values.push(root);
    inorder(root.right, values);
};
