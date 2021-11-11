# iterative
# n = number of nodes
# Time: O(n)
# Space: O(n)

from collections import deque


def tree_includes(root, target):
  if not root:
    return False
  queue = deque([root])

  while queue:
    current = queue.popleft()

    if current.val == target:
      return True

    if current.left:
      queue.append(current.left)

    if current.right:
      queue.append(current.right)

  return False


# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)

def tree_includes(root, target):
  if not root: return False
  if root.val == target: return True

  left = tree_includes(root.left, target)
  right = tree_includes(root.right, target)

  return left or right
