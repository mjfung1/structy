

# iterative
# n = number of nodes
# Time: O(n)
# Space: O(1)

def sum_list(head):
  total_sum = 0
  current = head
  while current is not None:
    total_sum += current.val
    current = current.next
  return total_sum

# -----------------------------------

# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)

def sum_list(head):
  if head is None:
    return 0
  return head.val + sum_list(head.next)


# ---------------------------------------
# my implemation
# n = number of nodes
# Time: O(n)
# Space: O(n)

def sum_list(head, sum=0):
  if head is None:
    return sum
  return sum_list(head.next, sum + head.val)



