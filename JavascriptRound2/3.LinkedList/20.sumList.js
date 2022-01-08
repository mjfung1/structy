


const sumList = (head) => {
  // todo
  if (!head) return 0;
  
  return head.val + sumList(head.next);
};


// --------------------------

const sumList = (head) => {
  // todo
  if (!head) return 0;
  let sum = 0;
  let current = head;
  
  while (current) {
    sum += current.val;
    current = current.next;
  }
  
  return sum;
};