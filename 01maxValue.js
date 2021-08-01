
// n = length of array
// Time: O(n)
// Space: O(1)

const maxValue = (nums) => {
  // todo
  let max = -Infinity;
  for (let num of nums) {
    if (num > max) max = num;
  }
  return max;
};