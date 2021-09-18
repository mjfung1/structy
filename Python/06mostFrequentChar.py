
# n = length of string
# Time: O(n)
# Space: O(n)

# using a hashmap(dictionary)

from collections import Counter
def most_frequent_char(s):
  count = char_counts(s)
  max = float('-inf')

  for key in count:
    if count[key] > max:
      max = count[key]

  for char in s:
    if count[char] == max:
      return char


def char_counts(s):
  count = {}

  for char in s:
    if char not in count:
      count[char] = 0

    count[char] += 1

  return count


# ---------------------------------------

# n = length of string
# Time: O(n)
# Space: O(n)

# using a hashmap(dictionary)

def most_frequent_char(s):
  count = {}
  for char in s:
    if char not in count:
      count[char] = 0
    count[char] += 1

  best = None
  for char in s:
    if best is None or count[char] > count[best]:
      best = char
  return best

# ---------------------------------

# using a hashmap(Counter)

# n = length of string
# Time: O(n)
# Space: O(n)



def most_frequent_char(s):
  count = Counter(s)
  best = None
  for char in s:
    if best is None or count[char] > count[best]:
      best = char
  return best

