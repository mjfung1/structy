
// n = length of nums
// time:  O(n)
// space: O(n)

const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  // todo
  if (i >= nums.length) return 0;
  if (i in memo) return memo[i];

  // case include current number
  let include = nums[i] + nonAdjacentSum(nums, i + 2, memo);

  // case exlude current number
  let exclude = nonAdjacentSum(nums, i + 1, memo);

  memo[i] = Math.max(include, exclude);
  return memo[i];
};