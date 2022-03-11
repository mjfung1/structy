
// 143. Reorder List


var reorderList = function(head) {
    let dummy = new ListNode(0, head);
    slow = dummy;
    fast = dummy;
    
    // 1. traverse to middle of list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // once at middle. 'chop off' list.
    let mid = slow.next;
    slow.next = null;
    
    // 2. reverse second half of list
    let prev = null;
    while (mid) {
        let temp = mid.next;
        mid.next = prev;
        prev = mid;
        mid = temp;
    }
    
    
    // 3. save global variables (first and second). and alternate
    let first = head;
    let second = prev;
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1
        first = temp1;
        second = temp2;
    }
    
};
