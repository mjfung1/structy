// memoization
// n = length of numbers
// time:  O(n^2)
// space: O(n)

const arrayStepper = (nums, i = 0, memo = {}) => {
  // todo
  if (i in memo) return memo[i];
  if (i >= nums.length - 1) return true;

  let maxSteps = nums[i];

  // step must start at 1.
  // if start at 0 => infinity loop => first step will always b zero!!!
  for (let step = 1; step <= maxSteps; step++) {
    if (arrayStepper(nums, i + step, memo) === true) {
      memo[i] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};



// --------------------------
// tabulation

const arrayStepper = (nums) => {
  // todo
  let table = Array(nums.length).fill(false);
  table[0] = true;
  
  for (let i = 0; i < nums.length; i++) {
    let steps = nums[i];
    if (table[i]) {
      for (let step = 1; step <= steps; step++) {
        table[i + step] = true;
      }
    }
  }

  return table[nums.length - 1];
};