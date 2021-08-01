
// RECURSIVE
// n = # of nodes
// time:  O(n);
// space: O(1);

const reverseList = (head) => {
  // todo
  let prev = null;
  let current = head;
  
  while (current) {
    
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  
  return prev;
};


// RECURSIVE
// n = # of nodes
// time:  O(n);
// space: O(n);
const reverseList = (head, prev=null) => {
  // todo
  if (!head) return prev;
  let nextHead = head.next;
  head.next = prev;
  return reverseList(nextHead, head);
};