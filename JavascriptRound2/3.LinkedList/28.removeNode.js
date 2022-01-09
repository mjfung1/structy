

const removeNode = (head, targetVal) => {
  // todo
  if (!head) return null;
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
};