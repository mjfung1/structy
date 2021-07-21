
// n = number of nodes
// time:  O(n)
// space: O(1)

const linkedListCycle = (head) => {
  // todo
  let turtoise = head;
  let hare = head;
  
  while (hare && hare.next) {
    turtoise = turtoise.next;
    hare = hare.next.next;
    if (hare === turtoise) return true;
  }
  return false;
};


// ------------------------------------------- //

// n = number of nodes
// time:  O(n)
// space: O(n)

const linkedListCycle = (head, set = new Set()) => {
  // todo
  if (!head) return false;
  if (set.has(head)) return true;

  set.add(head);

  return linkedListCycle(head.next, set);
};
