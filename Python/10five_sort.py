
# time: O(2n)
# space: O(n)
def five_sort(nums):
  i = 0
  
  for index, number in enumerate(nums):
    if nums[index] != 5:
      nums[i] = number
      i += 1
      
  for j in range(i, len(nums)):
    nums[j] = 5
    
  return nums


# -----------------------------------
# two pointers

def five_sort(nums):
  i = 0
  j = len(nums) - 1

  while i < j:
    if nums[i] != 5:
      i += 1
    elif nums[j] == 5:
      j -= 1
    else:
      nums[i], nums[j] = nums[j], nums[i]

  return nums


# ---------------------------------------
# using two pointers

# n = array size
# Time: O(n)
# Space: O(1)

def five_sort(nums):
 i = 0
 j = len(nums) - 1
 while i < j:
  if nums[j] == 5:
   j -= 1
  elif nums[i] == 5:
   nums[i], nums[j] = nums[j], nums[i]
   i += 1
  else:
   i += 1
 return nums



