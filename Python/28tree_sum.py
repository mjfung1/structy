

# iterative
# n = number of nodes
# Time: O(n)
# Space: O(n)

from collections import deque
def tree_sum(root):
  if not root:
    return 0
  sum = 0
  queue = deque([root])

  while queue:
    current = queue.popleft()
    sum += current.val

    if current.left:
      queue.append(current.left)
    if current.right:
      queue.append(current.right)

  return sum

# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)

def tree_sum(root):
  if not root: return 0
  return root.val + tree_sum(root.left) + tree_sum(root.right)
