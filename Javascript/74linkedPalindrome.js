
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

// THIS IS WRONG!!!!!
// LINKED LIST ARE REFERENCES THUS IF YOU MAKE CHANGES IT WILL REFLECT;
// IT PASSES STRUCTY'S LIMITED CASES;
// WILL NOT PASS THE CASE BELOW;

            // const a = new Node(3);
            // const b = new Node(2);
            // const c = new Node(1);
            // const d = new Node(3);

            // a.next = b;
            // b.next = c;
            // c.next = d;

            // // 3 -> 2 -> 1 -> 3
            // console.log(linkedPalindrome(a)); // false
            

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