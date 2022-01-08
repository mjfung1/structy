


const getNodeValue = (head, index) => {
  // todo
  if (!head) return null;
  if (index === 0) return head.val;
  
  return getNodeValue(head.next, index - 1);
};


// ------------------------

const getNodeValue = (head, index) => {
  // todo
  if (!head) return null;
  let current = head;
  
  while (current) {
    
    if (index === 0) return current.val;
    
    current = current.next;
    index--;
  }
  
  return null;
};

