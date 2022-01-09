


const zipperLists = (head1, head2) => {
  // todo
  let count = 0;
  let newNode = new Node('dum-dum');
  let current = newNode;
  
  while (head1 && head2) {
    if (count % 2 === 0) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    
    count++;
    current = current.next
  }
  
  current.next = head1 || head2;
  
  
  return newNode.next;
};

// ------------------------------------------

const zipperLists = (head1, head2, count = 0) => {
  // todo
  if (!head1) return head2;
  if (!head2) return head1;
  if (!head1 && !head2) return null;
  
  if (count % 2 === 0) {
    let temp = head1.next;
    head1.next = zipperLists(temp, head2, count + 1);
    return head1;
  } else {
    let temp = head2.next;
    head2.next = zipperLists(head1, temp, count + 1);
    return head2;
  }
};


// ------------------------------------------

const zipperLists = (head1, head2) => {
  // todo
  if (!head1) return head2;
  if (!head2) return head1;
  if (!head1 && !head2) return null;
  
  let next1 = head1.next;
  let next2 = head2.next;
  
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};
