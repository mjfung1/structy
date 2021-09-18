
# n = length of numbers list
# Time: O(n)
# Space: O(n)

# using a hashmap(dictionary)


def pair_product(numbers, target_product):
  previous_nums = {}

  for index, num in enumerate(numbers):
    complement = target_product / num

    if complement in previous_nums:
      return (index, previous_nums[complement])

    previous_nums[num] = index



