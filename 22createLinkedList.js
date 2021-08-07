

// iterative
// n = length of values
// time:  O(n)
// space: O(n)
const createLinkedList = (values) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  for (let val of values) {
    tail.next = new Node(val);
    tail = tail.next;
  }
  return dummyHead.next;
};

// --------------------------------------- // 

// recursive
// n = length of values
// time:  O(n)
// space: O(n)
const createLinkedList = (values, i = 0) => {
  if (i === values.length) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;
};
