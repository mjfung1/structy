
// 109. Convert Sorted List to Binary Search Tree


var sortedListToBST = function(head) {
    let values = getListValues(head);
    values = values.reverse();
    
    return treeBuilder(values);
};

const treeBuilder = (values) => {
    if (values.length === 0) return null;
    let mid = Math.floor(values.length / 2);
    let value = values[mid];
    let root = new TreeNode(value);
    root.left = treeBuilder(values.slice(0, mid));
    root.right = treeBuilder(values.slice(mid+1));
    return root;
};

const getListValues = (head) => {
    if (!head) return [];
    let next = getListValues(head.next);
    next.push(head.val);
    return next;
};