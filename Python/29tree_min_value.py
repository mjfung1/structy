
# iterative
# n = number of nodes
# Time: O(n)
# Space: O(n)
from collections import deque

def tree_min_value(root):
  queue = deque([root])
  smallest = float('inf')

  while queue:
    current = queue.popleft()
    smallest = min(smallest, current.val)

    if current.left:
      queue.append(current.left)
    if current.right:
      queue.append(current.right)

  return smallest

# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)
def tree_min_value(root):
  if not root: return float('inf')

  return min(root.val, tree_min_value(root.left), tree_min_value(root.right))
