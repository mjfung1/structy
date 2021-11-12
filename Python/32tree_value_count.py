
# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)
from collections import deque
def tree_value_count(root, target):
  if not root:
    return 0

  match = 1 if root.val == target else 0
  return match + tree_value_count(root.left, target) + tree_value_count(root.right, target)


# iterative
# n = number of nodes
# Time: O(n)
# Space: O(n)
def tree_value_count(root, target):
  if not root: return 0
  queue = deque([root])
  count = 0

  while queue:
    current = queue.popleft()

    if current.val == target: count += 1

    if current.left: queue.append(current.left)
    if current.right: queue.append(current.right)


  return count
