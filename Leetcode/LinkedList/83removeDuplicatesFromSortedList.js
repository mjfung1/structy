
// 83. Remove Duplicates from Sorted List


var deleteDuplicates = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast) {
        while (fast && slow.val === fast.val) fast = fast.next;
        slow.next = fast;
        slow = slow.next;
    }
    
    return head;
};



// --------------------------------------
// different attempt
var deleteDuplicates = function(head) {
    let current = head;
    let prev = head;
    
    while (current) {
        
        if (prev.val === current.val) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        
        current = current.next;
    }
    
    return head;
};