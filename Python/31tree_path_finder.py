

def path_finder(root, target):
  if not root:
    return None
  if root.val == target:
    return [ root.val ]

  left = path_finder(root.left, target)
  right = path_finder(root.right, target)

  if left:
    return [ root.val, *left ]

  if right:
    return [ root.val, *right ]
