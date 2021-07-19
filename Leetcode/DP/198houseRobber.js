
// 198. House Robber


var rob = function (nums, memo = new Map()) {
  let key = nums.join("");
  if (memo.has(key)) return memo.get(key);

  if (nums.length === 0) return 0;

  let robFirstHouse = nums[0] + rob(nums.slice(2), memo);
  let skipFirstHouse = rob(nums.slice(1), memo);

  let result = Math.max(robFirstHouse, skipFirstHouse);
  memo.set(key, result);
  return result;
};