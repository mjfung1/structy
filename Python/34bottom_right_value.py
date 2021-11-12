# n = number of nodes
# Time: O(n)
# Space: O(n)

from collections import deque


def bottom_right_value(root):
  queue = deque([root])

  value = None

  while queue:
    curr = queue.popleft()
    value = curr.val

    if curr.left:
      queue.append(curr.left)
    if curr.right:
      queue.append(curr.right)

  return value
