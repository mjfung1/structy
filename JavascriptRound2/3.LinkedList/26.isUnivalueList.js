

// iterative
const isUnivalueList = (head) => {
  // todo
  let current = head;
  
  while (current) {
    if (current.val !== head.val) return false;
    
    current = current.next;
  }
  
  return true;
};


// recursive
const isUnivalueList = (head, prev = null) => {
  // todo
  if (!head) return true;
  if (head.val !== prev && prev !== null) return false;
  return isUnivalueList(head.next, head.val);
};