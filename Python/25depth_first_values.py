
# iterative
# n = number of nodes
# Time: O(n)
# Space: O(n)

def depth_first_values(root):
  if not root:
    return []
  stack = [root]
  values = []

  while stack:
    node = stack.pop()

    values.append(node.val)

    if node.right:
      stack.append(node.right)

    if node.left:
      stack.append(node.left)

  return values


# recursive
# n = number of nodes
# Time: O(n)
# Space: O(n)

def depth_first_values(root):
  if root is None:
    return []

  left = depth_first_values(root.left)
  right = depth_first_values(root.right)

  return [root.val, *left, *right]
