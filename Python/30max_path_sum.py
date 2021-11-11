
# number of nodes
# Time: O(n)
# Space: O(n)

def max_path_sum(root):
  if not root: 
    return float('-inf')
  if not root.left and not root.right:
    return root.val
  
  return root.val + max(max_path_sum(root.left), max_path_sum(root.right))
