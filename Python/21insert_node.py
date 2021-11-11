

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None


# iterative - had trouble
# n = number of nodes
# Time: O(n)
# Space: O(1)

def insert_node(head, value, index):
  if index == 0:
    new_head = Node(value)
    new_head.next = head
    return new_head

  count = index - 1
  current = head

  while current:
    if count == 0:
      new_node = Node(value)
      temp = current.next
      current.next = new_node
      current.next.next = temp

    count -= 1
    current = current.next

  return head


# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)

def insert_node(head, value, index):
  if index == 0:
    new_node = Node(value)
    new_node.next = head
    return new_node

  if index - 1 == 0:
    new_node = Node(value)
    temp = head.next
    head.next = new_node
    new_node.next = temp
    return head

  insert_node(head.next, value, index - 1)

  return head
