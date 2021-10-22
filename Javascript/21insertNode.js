

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  // todo
  if (index === 0) {
    let newHead = new Node(value);
    newHead.next = head;
    return newHead
  }
  let count = 0;
  let current = head;
  
  while (current) {
    if (count === index-1) {
      let next = current.next;
      current.next = new Node(value);
      current.next.next = next;
    }
    
    count += 1;
    current = current.next;
  }
  return head;
};


// --------------------------------------- //
// recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)

const insertNode = (head, value, index, count = 0) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  if (count === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }
  
  insertNode(head.next, value, index, count + 1);
  return head;
};


// -------------------------------------------------- //
// author: miguel.  this is assuming we always get a valid index;
const insertNode = (head, value, index) => {
  // todo
  const newNode = new Node(value);
  if (!index) {
    newNode.next = head;
    return newNode;
  }
  let current = head;
  
  while (--index) {
    current = current.next;
  }
  let temp = current.next;
  current.next = newNode;
  newNode.next = temp;
  return head;
};


const insertNode = (head, value, index) => {
  // todo
  const newNode = new Node(value);
  if (!index) {
    newNode.next = head;
    return newNode;
  }
  let current = head;
  
  while (--index) {
    current = current.next;
  }
  let temp = current.next;
  current.next = newNode;
  newNode.next = temp;
  return head;
};


// ----------------------------------------------//

const insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  if (index === 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }
  
  insertNode(head.next, value, index-1);
  return head;
};