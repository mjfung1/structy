
// 445. Add Two Numbers II
// time: O(n);
// space: O(1);

var addTwoNumbers = function(l1, l2) {
    let reversed1 = reverser(l1);
    let reversed2 = reverser(l2);
    
    let dummy = new ListNode(0);
    let tail = dummy;
    let carry = 0;
    
    while (reversed1 || reversed2 || carry) {
        let val1 = reversed1 ? reversed1.val : 0;
        let val2 = reversed2 ? reversed2.val : 0;
        
        let sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        let digit = sum % 10;
 
        tail.next = new ListNode(digit);
        tail = tail.next;
        
        if (reversed1) reversed1 = reversed1.next;
        if (reversed2) reversed2 = reversed2.next;
    }

    return reverser(dummy.next);
    
};

const reverser = (list) => {
    let current = list;
    let prev = null;
    
    while (current) {
        let temp = current.next;
        
        current.next = prev;
        prev = current
        current = temp;
    }
    
    return prev;
};