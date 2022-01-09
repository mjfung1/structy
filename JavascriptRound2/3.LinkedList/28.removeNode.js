

const removeNode = (head, targetVal) => {
  // todo
  if (!head) return null;
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
};



// ---------------------
const removeNode = (head, targetVal) => {
  // todo
  let dummyNode = { next: head };
  let tail = dummyNode;
  
  while (head) {
    if (head.val === targetVal) {
      tail.next = head.next;  
    }
    
    tail = tail.next;
    head = head.next;
  }
  
  return dummyNode.next;
};
