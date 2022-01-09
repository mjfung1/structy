


// iterative
const mergeLists = (head1, head2) => {
  // todo
  const newNode = new Node();
  let tail = newNode;
  let curr1 = head1;
  let curr2 = head2;
  
  while (curr1 && curr2) {
    
    if (curr1.val < curr2.val) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    
    tail = tail.next;
  }
  
  tail.next = curr1 || curr2;
  
  return newNode.next;
};


// recursive
const mergeLists = (head1, head2) => {
  // todo
  if (!head1) return head2;
  if (!head2) return head1;
  
  if (head1.val < head2.val) {
    let next1 = head1.next;
    head1.next = mergeLists(next1, head2);
    return head1;
  } else {
    let next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2;
  }
};