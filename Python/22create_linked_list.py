class Node:
  def __init__(self, val):
    self.val = val
    self.next = None


# recursive
# n = length of values
# Time: O(n)
# Space: O(n)
def create_linked_list(values, i= 0):
  if i == len(values):
    return None
  value = values[i]
  new_head = Node(value)
  new_head.next = create_linked_list(values, i+1)
  return new_head


# iterative
# n = length of values
# Time: O(n)
# Space: O(n)
def create_linked_list(values):
  dummy = Node(0)
  current = dummy
  for value in values:
    current.next = Node(value)
    current = current.next

  return dummy.next
