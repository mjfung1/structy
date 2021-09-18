

# brute force(timeout)
# n = length of array a, m = length of array b
# Time: O(n*m)
# Space: O(min(n, m))


def intersection(a, b):
  result = []
  for item in b:
    if item in a:
      result.append(item)
  return result


#  ------------------------------
# using set(pass)
# n = length of array a, m = length of array b
# Time: O(n+m)
# Space: O(n)


def intersection(a, b):
  set_a = set(a)
  return [item for item in b if item in set_a]


#  --------------------------------

# using set(pass). More verbose
# n = length of array a, m = length of array b
# Time: O(n+m)
# Space: O(n)

def intersection(a, b):
  output = []
  set_b = set(b)
  for number in a:
    if number in set_b:
      output.append(number)

  return output
