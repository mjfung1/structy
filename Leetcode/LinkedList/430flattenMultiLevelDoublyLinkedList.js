
// 430. Flatten a Multilevel Doubly Linked List
// bloomberg interview question

var flatten = function(head) {
    if (!head) return head;
    
    let newNode = new Node(0);
    let current = newNode;
    let stack = [ head ];
    
    while (stack.length) {
        let node = stack.pop();
        if (node.next) stack.push(node.next);
        if (node.child) stack.push(node.child);
        
        current.next = node;
        node.prev = current;
        current.child = null;
        
        current = node;
    }
    
    newNode.next.prev = null;
    
    return newNode.next;
};