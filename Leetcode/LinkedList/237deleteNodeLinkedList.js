// 237. Delete Node in a Linked List


var deleteNode = function(node) {
    // set node to be deleted to next value;
    node.val = node.next.val;
    // now set its next to next.next.
    node.next = node.next.next;
    // basically deleted node becomes next
    // next gets deleted.
};