
// 61. Rotate List

var rotateRight = function(head, k) {
    if (!head) return head;
 
    let { length, prev } = getLength(head); 
    
    k = k % length;
    if (k === 0) return head;
    
    let size = length - k - 1;
    
    let current = head;
    
    while (size--) current = current.next;
    
    
    let newHead = current.next;
    current.next = null;
    prev.next = head;
    
    
    return newHead;
};

const getLength = (head) => {
    let current = head;
    
    let length = 0;
    let prev;
    while (current) {
        length++;
        prev = current
        current = current.next;
    }
    
    return {length , prev};
};