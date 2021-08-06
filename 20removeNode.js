

// iterative
// n = number of nodes
// Time: O(n)
// Space: O(1)

const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;
  
  let current = head;
  let prev = null;
  while (current !== null) {
    if (current.val === targetVal) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
  }
  
  return head;
};

// recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)

const removeNode = (head, targetVal) => {
  if (head === null) return null;
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
};


// ----------------------------- //
// author: miguel
const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;
  let slow = head;
  let fast = head.next;
  
  while (fast) {
    if (fast.val === targetVal) {
      slow.next = fast.next;
    }
    
    slow = slow.next;
    fast = fast.next;
  }
  return head;
};