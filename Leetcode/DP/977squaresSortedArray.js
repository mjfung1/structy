
// 977. Squares of a Sorted Array

var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  let squared = Array(nums.length);

  for (let i = right; i >= 0; i--) {
      
    let squared1 = nums[left] ** 2;
    let squared2 = nums[right] ** 2;

    if (squared1 > squared2) {
      squared[i] = squared1;
      left++;
    } else {
      squared[i] = squared2;
      right--;
    }
  }

  return squared;
};