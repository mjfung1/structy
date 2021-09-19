

# iterative
# n = number of nodes
# Time: O(n)
# Space: O(1)

def is_univalue_list(head):
  current = head
  while current is not None:
    if current.val != head.val:
      return False
    current = current.next
  return True


# -----------------------------------------
# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)

def is_univalue_list(head, prev_val=None):
  if head is None:
    return True
  if prev_val is None or head.val == prev_val:
    return is_univalue_list(head.next, head.val)
  else:
    return False

# -----------------------------------------
# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)

def is_univalue_list(head, value= None):
  if head is None:
    return True
  if value is not None and head.val != value:
    return False

  return is_univalue_list(head.next, head.val)
