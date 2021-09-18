

# iterative
# n = number of nodes
# Time: O(n)
# Space: O(n)

def linked_list_values(head):
  values = []
  current = head
  while current is not None:
    values.append(current.val)
    current = current.next
  return values


# -----------------------------------

# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)
def linked_list_values(head):
  values = []
  _linked_list_values(head, values)
  return values


def _linked_list_values(head, values):
  if head is None:
    return
  values.append(head.val)
  _linked_list_values(head.next, values)


# -----------------------------------
# recursive
# what's complexity. This algo creates multiple arrays

def linked_list_values(head):
  if head is None:
    return []

  array = linked_list_values(head.next)
  return [ head.val, *array ]
