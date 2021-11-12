
# n = number of nodes
# Time: O(n)
# Space: O(n)


def all_tree_paths(root):
  if not root:
    return []
  if not root.left and not root.right:
    return [[root.val]]

  all_paths = []

  left = all_tree_paths(root.left)
  for sub in left:
    all_paths.append([root.val, *sub])
  right = all_tree_paths(root.right)
  for sub in right:
    all_paths.append([root.val, *sub])

  return all_paths
