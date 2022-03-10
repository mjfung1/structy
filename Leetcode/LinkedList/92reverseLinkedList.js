
// 92. Reverse Linked List II


var reverseBetween = function(head, left, right) {
    
    let dummy = new ListNode(0, head);
    
    let leftPrev = dummy;
    let current = head;
    
    // move pointers;
    while (left > 1) {
        leftPrev = current;
        current = current.next;
        
        left--;
        right--;
    }
    
    // reverse list
    let tail = current;
    
    let prev = null;
    while (right) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
        
        right--;
    }
    
    // reassign pointers
    tail.next = current;
    
    leftPrev.next = prev;
    
    return dummy.next;
    
};