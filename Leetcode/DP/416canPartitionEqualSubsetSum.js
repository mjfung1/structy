
// 416. Partition Equal Subset Sum


var canPartition = function (nums) {
  let sum = nums.reduce((acc, num) => acc + num);

  if (sum % 2 === 0) {
    return _canPartition(nums, sum / 2, nums.length - 1, new Map());
  }

  return false;
};

// 0-1 knapSack
const _canPartition = (nums, sum, n, memo) => {
  let key = sum + "," + n;
  if (memo.has(key)) return memo.get(key);

  if (sum === 0) return true;

  if (sum < 0 || n < 0) return false;

  let TakeOutNum = _canPartition(nums, sum, n - 1, memo);
  let TakeNum = _canPartition(nums, sum - nums[n], n - 1, memo);

  let result = TakeOutNum || TakeNum;
  memo.set(key, result);

  return result;
};
