




// my implementation
// time: O (n+m);
// space: O (1);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1, head2) => {
  // todo
  let newHead = new Node(0);
  let tail = newHead;
  
  while (head1 && head2) {
    tail.next = head1;
    tail = tail.next;
    head1 = head1.next;
    
    tail.next = head2;
    tail = tail.next;
    head2 = head2.next;
  }
  
  if (head1) tail.next = head1;
  if (head2) tail.next = head2;
  
  return newHead.next;
};


// ---------------------------------- //
const zipperLists = (head1, head2) => {
  // todo
  let dummy = {next: null};
  let output = dummy;
  while (head1 && head2) {
    dummy.next = head1;
    head1 = head1.next;
    dummy = dummy.next;
    
    dummy.next = head2;
    head2 = head2.next;
    dummy = dummy.next;
  }
  
  dummy.next = head1 || head2;
  
  return output.next;
};



// ------------------------------------------- //

// MOST OPTIMAL
// n = length of list 1
// m = length of list 2
// time:  O(min(n, m))
// space: O(1)
const zipperLists = (head1, head2) => {
  
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  
  while (current1 && current2) {
    
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    count += 1;
    tail = tail.next;
    
  }
  
  tail.next = current1 || current2;
  
  
  return head1;
};


// ----------------------------------------- //
// recursive
// n = length of list 1
// m = length of list 2
// time:  O(min(n, m))
// space: O(min(n, m))
const zipperLists = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;
  
  let next1 = head1.next;
  let next2 = head2.next;
  
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  
  return head1;
};


