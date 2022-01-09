


const linkedListCycle = (head) => {
  // todo
  const seen = new Set();
  let current = head;
  
  while (current) {
    if (seen.has(current)) return true;
    seen.add(current);
    current = current.next;
  }
  
  return false;
};








const linkedListCycle = (head) => {
  // todo
  let slow = head;
  let fast = head;
  let firstIteration = true;

  while (fast && fast.next) {
    if (!firstIteration && slow === fast) return true;
    firstIteration = false;
    slow = slow.next;
    fast = fast.next.next;
  }
  
  return false;
};