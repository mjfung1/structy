


# iterative
# n = number of nodes
# Time: O(n)
# Space: O(1)

def reverse_list(head):
  prev = None
  current = head
  while current is not None:
    next = current.next
    current.next = prev
    prev = current
    current = next
  return prev

# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)

def reverse_list(head, prev = None):
  if head is None:
    return prev
  next = head.next
  head.next = prev
  return reverse_list(next, head)
