
// 203. Remove Linked List Elements

var removeElements = function(head, val) {
    let dummy = {next: head};
    let current = head;
    let prev = dummy;
    
    while (current) {
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        
        current = current.next;
    }
    
    return dummy.next;
    
};