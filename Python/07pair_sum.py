
# n = length of numbers list
# Time: O(n)
# Space: O(n)

# using a hashmap(dictionary)


def pair_sum(numbers, target_sum):
  previous_numbers = {}

  for index, num in enumerate(numbers):
    complement = target_sum - num

    if complement in previous_numbers:
      return (index, previous_numbers[complement])

    previous_numbers[num] = index


