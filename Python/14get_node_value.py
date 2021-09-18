

# iterative
# n = number of nodes
# Time: O(n)
# Space: O(1)

def get_node_value(head, index):
  count = 0
  current = head
  while current is not None:
    if count == index:
      return current.val

    current = current.next
    count += 1

  return None

# ---------------------------------------------
# iterative.  stopping at index
# n = number of nodes
# Time: O(n)
# Space: O(1)

def get_node_value(head, index):
  pass # todo
  current = head
  i = 0

  while current is not None and i < index:
    current = current.next
    i += 1

  return current.val if current else None



# -----------------------------------------

# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)


def get_node_value(head, index):
  if head is None:
    return None

  if index == 0:
    return head.val

  return get_node_value(head.next, index - 1)


