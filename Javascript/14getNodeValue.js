

// RECURSIVE
// n = number of nodes
// time:  O(n)
// space: O(n)
const getNodeValue = (head, index) => {
  // todo
  if (!head) return null;
  if (!index) return head.val;
  return getNodeValue(head.next, index-1);
};


// ------------------------------------- //
// ITERATIVE
// n = number of nodes
// time:  O(n)
// space: O(1)
const getNodeValue = (head, index) => {
  // todo
  let current = head;
  
  while (current) {
    if (index === 0) return current.val;
    index--;
    current = current.next;
  }
  
  return null;
};