

// 213. House Robber II


var _rob = function (nums, memo) {
  let key = nums.join("");
  if (key in memo) return memo[key];

  if (nums.length === 0) return 0;

  let robFirstHouse = nums[0] + _rob(nums.slice(2), memo);
  let skipFirstHouse = _rob(nums.slice(1), memo);

  let result = Math.max(robFirstHouse, skipFirstHouse);
  memo[key] = result;
  return result;
};

var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  let firstHouse = _rob(nums.slice(0, nums.length - 1), {});
  let skipFirst = _rob(nums.slice(1), {});

  return Math.max(firstHouse, skipFirst);
};