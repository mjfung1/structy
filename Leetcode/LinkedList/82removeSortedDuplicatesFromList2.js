
// 82. Remove Duplicates from Sorted List II


var deleteDuplicates = function(head) {
    if (!head) return null;
    let dummyHead = new ListNode(0);
    let prev = dummyHead;
    prev.next = head;
    
    let slow = head;
    let fast = head.next;
    
    while (fast) {
        if (slow.val === fast.val) {
            while (fast && slow.val === fast.val) {
                fast = fast.next;
            }
            prev.next = fast;
            slow = fast;
            if (fast) fast = fast.next;
            
        } else {
            prev = prev.next;
            slow = slow.next;
            fast = fast.next;
        }
       
    }
    
    return dummyHead.next;
};

// ------------------------------------
// cleaner implementation from leetcode

var deleteDuplicates = function(head) {
    let sentinel = new ListNode(0, head);
    let prev = sentinel;
    let current = head;
    
    while (current) {
        
        if (current.next && current.val === current.next.val) {
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        
        current = current.next;
    }
    
    return sentinel.next;
};