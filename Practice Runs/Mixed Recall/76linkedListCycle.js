
// n = number of nodes
// Time: O(n)
// Space: O(1)

const linkedListCycle = (head) => {
  // todo
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    
    slow = slow.next;
    fast = fast.next.next;
    
    if (fast === slow) return true;
  }
  
  return false;
};

// -------------------------------------------------
// using a set
// Worst Case - Iterate/store WHOLE linked list and returning false;
// n = number of nodes
// Time: O(n)
// Space: O(n)

const linkedListCycle = (head) => {
  // todo
  let seen = new Set();
  let current = head;
  
  while (current) {
    if (seen.has(current)) return true;
    seen.add(current);
    current = current.next;
  }
  
  return false;
};
