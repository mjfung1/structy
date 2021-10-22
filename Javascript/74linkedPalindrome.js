
// n = number of nodes
// time:  O(n)
// space: O(n)

const linkedPalindrome = (head) => {
  const values = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values.join(",") === values.reverse().join(",");
};


// ------------------------------- //


// n = number of nodes
// Time: O(n)
// Space: O(1)

const linkedPalindrome = (head) => {
  // todo
  let current = head;
  let reversed = reversedList(current);

  while (head) {
    if (head.val !== reversed.val) return false;
    head = head.next;
    reversed = reversed.next;
  }
  return true;
};

const reversedList = (head, prev = null) => {
  if (!head) return prev;
  let temp = head.next;
  head.next = prev;
  return reversedList(temp, head);
};