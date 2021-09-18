
# n = length of string 1
# m = length of string 2
# Time: O(n + m)
# Space: O(n + m)

# using dictionaries
from collections import Counter
def anagrams(s1, s2):
  return char_count(s1) == char_count(s2)


def char_count(s):
  count = {}

  for char in s:
    if char not in count:
      count[char] = 0

    count[char] += 1

  return count



# -------------------------------------------
# n = length of string 1
# m = length of string 2
# Time: O(n + m)
# Space: O(n + m)

# using Counters


def anagrams(s1, s2):
  return Counter(s1) == Counter(s2)
