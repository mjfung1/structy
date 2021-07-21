
// n = number of nodes
// time:  O(n)
// space: O(1)

const middleValue = (head) => {
  // todo
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.val;
};


// -------------------------------- //

// n = number of nodes
// Time: O(n)
// Space: O(n)

const middleValue = (head) => {
  // todo
  let array = [];
  let current = head;

  while (current) {
    array.push(current.val);
    current = current.next;
  }

  return array[Math.floor(array.length / 2)];
};
