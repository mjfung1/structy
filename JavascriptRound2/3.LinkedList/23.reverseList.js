

// iterative
const reverseList = (head) => {
  // todo
  let current = head;
  let prev = null;
  
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  
  return prev;
};


// recursive
const reverseList = (head, prev = null) => {
  // todo
  if (!head) return prev;
  
  let temp = head.next;
  head.next = prev;
  
  return reverseList(temp, head);
};