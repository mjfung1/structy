
// 328. Odd Even Linked List
// time: O(n);
// space: O(1);

var oddEvenList = function(head) {
    let odd = new ListNode(); 
    let even = new ListNode();  
    let tail = odd;
    let tail2 = even;
    
    let current = 1;
    while (head) {  
        if (current % 2 !== 0) {
            tail.next = head;
            tail = tail.next;
        } else {
            tail2.next = head;
            tail2 = tail2.next;
        }
        head = head.next;
        current++;
    }
    tail2.next = null;
    tail.next = even.next;
    
    return odd.next;
    
};