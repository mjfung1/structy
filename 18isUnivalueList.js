
// iterative
// n = number of nodes
// time:  O(n)
// space: O(1)

const isUnivalueList = (head) => {
  // todo
  let val = head.val;
  let current = head;
  
  while (current) {
    if (current.val !== val) return false;
    current = current.next;
  }
  
  return true;
};

// ------------------------- //
// my implementation
// recursive
// n = number of nodes
// time:  O(n)
// space: O(n)

const isUnivalueList = (head, prevVal = head.val) => {
  // todo
  if (!head) return true;
  if (head.val !== prevVal) return false;
  
  return isUnivalueList(head.next, head.val);
};



// -------------------------------------- //
// structy
// recursive
// n = number of nodes
// time:  O(n)
// space: O(n)


const isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
}