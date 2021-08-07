
// iterative
// n = length of list 1
// m = length of list 2
// time:  O(max(n, m))
// space: O(max(n, m))
const addLists = (head1, head2) => {
  // todo
  let dummyHead = new Node(0);
  let tail = dummyHead;
  
  let carry = 0;
  let sum = 0;
  let digit;
  
  let current1 = head1;
  let current2 = head2;
  
  while (current1 || current2 || carry) {
    let val1 = current1 ? current1.val : 0;
    let val2 = current2 ? current2.val : 0;
    
    let sum = val1 + val2 + carry;
    let digit = sum % 10;
    if (sum > 9) carry = 1;
    else carry = 0;
    
    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
    
    tail.next = new Node(digit);
    tail = tail.next;
  }
  
  return dummyHead.next;
};



// ------------------------------------------- //
// recursive
// n = length of list 1
// m = length of list 2
// time:  O(max(n, m))
// space: O(max(n, m))
const addLists = (head1, head2, carry=0) => {
  if (!head1 && !head2 && !carry) return null;
  
  let val1 = head1 ? head1.val : 0;
  let val2 = head2 ? head2.val : 0;
  let sum = val1 + val2 + carry;
  let nextCarry = sum > 9 ? 1 : 0;
  let digit = sum % 10;
  
  let next1 = head1 ? head1.next : null;
  let next2 = head2 ? head2.next : null;
  
  let newNode = new Node(digit);
  newNode.next = addLists(next1, next2, nextCarry);
  return newNode;
};

