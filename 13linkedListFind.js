

// ITERATIVE
// n = number of nodes
// time:  O(n)
// space: O(1)
const linkedListFind = (head, target) => {
  // todo
  let current = head;
  while (current) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

// ---------------------------- //
// RECURSIVE
// n = number of nodes
// time:  O(n)
// space: O(n)
const linkedListFind = (head, target) => {
  // todo
  if (!head) return false;
  if (head.val === target) return true;
  
  return linkedListFind(head.next, target);
};
