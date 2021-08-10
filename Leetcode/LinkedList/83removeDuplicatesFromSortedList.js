
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