
# n = length of string
# Time: O(n)
# Space: O(n)

def compress(s):
  s += '!'
  i = 0
  j = 0
  result = []

  while j < len(s):
    if s[i] == s[j]:
      j += 1
    else:
      num = j - i
      if num == 1:
        result.append(s[i])
      else:
        letter = str(num) + s[i]
        result.append(letter)
      i = j

  return ''.join(result)
