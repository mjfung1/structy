
// n = array size
// time:  O(n)
// space: O(1)

const fiveSort = (nums) => {
  // todo
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    while (left < right && nums[right] === 5) right--;
    
    while (left < right && nums[left] !== 5) left++;
    
    [ nums[left], nums[right] ] = [ nums[right], nums[left] ];

  }
  return nums;
};


// --------------------------------- //

const fiveSort = (nums) => {
  // todo
  let i = 0;
  let j = nums.length-1;
  
  while (i < j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
      i++;
    } else {
      i++;
    }
  }
  return nums;
};