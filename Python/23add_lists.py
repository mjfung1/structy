

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None



# recursive
# n = length of list 1
# m = length of list 2
# Time: O(max(n, m))
# Space: O(max(n, m))

def add_lists(head_1, head_2, carry=0):
  if head_1 is None and head_2 is None and carry is 0:
    return None

  val1 = head_1.val if head_1 else 0
  val2 = head_2.val if head_2 else 0

  sum = val1 + val2 + carry
  digit = sum % 10
  carry = 1 if sum > 9 else 0

  next_1 = head_1.next if head_1 else head_1
  next_2 = head_2.next if head_2 else head_2

  new_node = Node(digit)
  new_node.next = add_lists(next_1, next_2, carry)

  return new_node
