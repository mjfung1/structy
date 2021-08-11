
// 138. Copy List with Random Pointer


var copyRandomList = function(head) {
    let newHead = new ListNode(0);
    let tail = newHead;
    let current = head;
    
    let nodeMap = new Map();
    
    while (current) {
        let newNode = new ListNode(current.val);
        nodeMap.set(current, newNode);
        
        tail.next = newNode;
        
        tail = tail.next;
        current = current.next;
    }
    
    current = head;
    let copy = newHead.next;
    
    while (current) {
        if (current.random === null) {
            copy.random = null;
        } else {
            let node = nodeMap.get(current.random);
            copy.random = node;
        }
        copy = copy.next
        current = current.next;
    }
    
   return newHead.next;
};


// ------------------------------------------- //

var copyRandomList = function(head, seen = new Map()) {
    if (!head) return null;
    if (seen.has(head)) return seen.get(head);
    
    let copyHead = new Node(head.val);
    seen.set(head, copyHead);
    
    copyHead.next = copyRandomList(head.next, seen);
    copyHead.random = copyRandomList(head.random, seen);
    
    return copyHead;
};