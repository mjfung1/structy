
// ITERATIVE
// n = number of nodes
// time:  O(n)
// space: O(n)

const linkedListValues = (head) => {
  // todo
  const values = [];
  let dummy = head;
  
  while (dummy) {
    values.push(dummy.val)
    dummy = dummy.next;
  }
  
  return values;
};


// RECURSIVE
// n = number of nodes
// time:  O(n)
// space: O(n)
const linkedListValues = (head) => {
  // todo
  const values = [];
  _linkedListValues(head, values);
  return values;
};

const _linkedListValues = (head, values) => {
  if (!head) return;
  values.push(head.val);
  _linkedListValues(head.next, values);
};