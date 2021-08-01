

// ITERATIVE
// n = # of nodes
// time:  O(n)
// space: O(1)
const sumList = (head) => {
  // todo
  let sum = 0;
  let current = head;
  
  while (current) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};


// RECURSIVE - MY IMPLEMENTATION
// n = # of nodes
// time:  O(n)
// space: O(n)
const sumList = (head, sum=0) => {
  // todo
  if (!head) return sum;
  return sumList(head.next, sum+head.val);
};




// RECURSIVE - STRUCTY - yet another implementation
// n = # of nodes
// time:  O(n)
// space: O(n)
const sumList = (head) => {
  // todo
  if (!head) return 0;
  return head.val + sumList(head.next);
};