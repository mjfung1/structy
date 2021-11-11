
# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)
def remove_node(head, target_val):
  if not head:
    return None

  if head.val == target_val:
    return head.next

  head.next = remove_node(head.next, target_val)
  return head


# iterative
# n = number of nodes
# Time: O(n)
# Space: O(1)
def remove_node(head, target_val):
  if head.val == target_val:
    return head.next

  current = head
  prev = None

  while current:
    if current.val == target_val:
      prev.next = current.next
      break
    prev = current
    current = current.next

  return head
