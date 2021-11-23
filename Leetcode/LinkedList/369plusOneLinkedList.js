
// 369. Plus One Linked List
// is github working here

var plusOne = function(head) {
    let reversed = reverser(head);
    let head2 = new ListNode(1);
    
    let carry = 0;
    let newHead = new ListNode();
    let tail = newHead;
    
    while (reversed || head2 || carry) {
        let val1 = reversed ? reversed.val : 0;
        let val2 = head2 ? head2.val : 0;
        
        let sum = val1 + val2 + carry;
        let digit = sum % 10;
        carry = sum > 9 ? 1 : 0;
        
        tail.next = new ListNode(digit);    
        tail = tail.next;
        
        if (reversed) reversed = reversed.next;
        if (head2) head2 = head2.next;
    }
    
    return reverser(newHead.next);
};

const reverser = (list) => {
    prev = null;
    
    while (list) {
        let temp = list.next;
        list.next = prev;
        prev = list;
        list = temp;
    }
    
    return prev;
};