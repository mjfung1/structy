
// 1367. Linked List in Binary Tree


var isSubPath = function(head, root) {
    if (!root) return false;
    return _isSubPath(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
};

const _isSubPath = (head, root) => {
    if (!head) return true;
    if (!root) return false;
    if (head.val !== root.val) return false;
       
    return _isSubPath(head.next, root.left) || _isSubPath(head.next, root.right);
}; 