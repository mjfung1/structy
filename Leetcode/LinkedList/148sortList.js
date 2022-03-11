
// 148. Sort List

var sortList = function(head) {
    if(head === null || head.next === null) return head;
    
    const mid = getMid(head);
    
    const left = sortList(head);
    const right = sortList(mid);
    
    return merge(left, right);
};

const merge = (list1, list2) => {
    let dummy = new ListNode(0);
    let tail = dummy;
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next= list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        
        tail = tail.next;
    }
    
    tail.next = list1 || list2;
    
    return dummy.next;
}

const getMid = (head) => {
    let dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = dummy;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let mid = slow.next;
    slow.next = null;
    
    return mid;
};