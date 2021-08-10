


// 1721. Swapping Nodes in a Linked List

var swapNodes = function(head, k) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    
    let firstCurrent = dummyHead;

    let firstIdx = 0;
    while (firstCurrent && firstIdx < k) {
        firstIdx++;
        firstCurrent = firstCurrent.next;
    }
    
    let secCurrent = dummyHead;
    let fast = firstCurrent;
    
    while (fast) {
        secCurrent = secCurrent.next;
        fast = fast.next;
    }
    
    [firstCurrent.val, secCurrent.val] = [secCurrent.val, firstCurrent.val];
    
    return head;
};