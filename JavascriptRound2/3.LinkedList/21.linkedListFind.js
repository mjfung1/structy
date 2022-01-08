


const linkedListFind = (head, target) => {
  // todo
  if (!head) return false;
  if (head.val === target) return true;
  
  return linkedListFind(head.next, target);
};

// --------------------------


const linkedListFind = (head, target) => {
  // todo
  if (!head) return false;
  let current = head;
  
  while (current) {
    if (current.val === target) return true;
    
    current = current.next;
  }
  
  return false;
};
