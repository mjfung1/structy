


// iterative
const linkedListValues = (head) => {
  // todo
  const values = [];
  
  getValues(head, values);
  
  return values;
};

const getValues = (head, values) => {
  if (!head) return;
  values.push(head.val);
  getValues(head.next, values);
};

// ----------------------

// recursive
const linkedListValues = (head) => {
  // todo
  const values = [];
  let current = head;
  
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  
  return values;
};

