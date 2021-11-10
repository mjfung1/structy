
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


// --------------------------------------------------
var rob = function(nums, i = 0, memo={}) {
    if (i in memo) return memo[i];
    if (i >= nums.length) return 0;
    
    let firstHouse = nums[i];
    
    // cannot rob adjacent house - skip 2
    let robFirst = firstHouse + rob(nums, i + 2, memo);
    
    // can rob adjacent house - skip first
    let skipFirst = rob(nums, i + 1, memo);
    
    memo[i] = Math.max(robFirst, skipFirst);
    return memo[i];
};