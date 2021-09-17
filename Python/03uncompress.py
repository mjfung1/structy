
# n = number of groups
# m = max num found in any group
# Time: O(n*m)
# Space: O(n*m)

def uncompress(s):
  numbers = '0123456789'
  i = 0
  j = 0
  result = []
  while j < len(s):
    if s[j] in numbers:
      j += 1
    else:
      num = int(s[i:j])
      letters = s[j] * num
      result.append(letters)
      j += 1
      i = j

  return ''.join(result)
