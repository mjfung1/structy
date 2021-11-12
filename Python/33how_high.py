
# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)
from collections import deque
def how_high(node):
  if not node:
    return -1
  return 1 + max(how_high(node.left), how_high(node.right))


# iterative
# n = number of nodes
# Time: O(n)
# Space: O(n)
def how_high(node):
  if not node: return -1
  queue = deque([ ( node, 0 )])
  height = 0

  while queue:
    curr, level  = queue.popleft()
    height = level
    if curr.left: queue.append((curr.left, level + 1))
    if curr.right: queue.append((curr.right, level + 1))

  return height
