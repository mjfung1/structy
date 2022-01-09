


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
