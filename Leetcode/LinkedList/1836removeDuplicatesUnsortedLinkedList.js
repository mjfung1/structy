

// 1836. Remove Duplicates From an Unsorted Linked List
// time: O(n)
// space: O(n)
var deleteDuplicatesUnsorted = function(head) {
    const freq = {};
    let current = head;
    
    while (current) {
        freq[current.val] = ++freq[current.val] || 1;
        current = current.next;
    }
    
    const dummy = new ListNode(null, head);
    current = head;
    
    prev = dummy;
    while(current) {
        const key = current.val;
        if (freq[key] > 1) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        
        
            
        current = current.next;    
    }
    
    return dummy.next;
};
