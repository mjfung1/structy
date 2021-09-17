
# n = length of list
# Time: O(n)
# Space: O(1)

def max_value(nums):
  maximum = float('-inf')
  
  for num in nums:
    if num > maximum:
      maximum = num
      
  return maximum
