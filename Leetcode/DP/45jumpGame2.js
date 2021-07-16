
// 45. Jump Game II


var jump = function (nums, i = 0, memo = {}) {
  if (i in memo) return memo[i];
  if (i === nums.length - 1) return 0;

  let maxSteps = nums[i];

  let min = Infinity;
  for (let step = 1; step <= maxSteps; step++) {
    let attempt = 1 + jump(nums, i + step, memo);
    min = Math.min(min, attempt);
  }

  memo[i] = min;
  return min;
};