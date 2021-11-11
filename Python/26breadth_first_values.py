
# n = number of nodes
# Time: O(n)
# Space: O(n)

from collections import deque

def breadth_first_values(root):
  # queue = deque([root])
  if not root:
    return []
  queue = deque([ root ])
  values = []

  while queue:
    current = queue.popleft()
    values.append(current.val)

    if current.left:
      queue.append(current.left)
    if current.right:
      queue.append(current.right)

  return values
