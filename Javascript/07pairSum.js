
// using a hashmap (object)

// n = length of array
// time:  O(n)
// space: O(n)

const pairSum = (numbers, targetSum) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previousNums) return [i, previousNums[complement]];
    
    previousNums[num] = i;
  }
};


// ------------------------------------------ //

const pairSum = (numbers, targetSum) => {
  // todo
  let nums = {};
  
  for (let idx = 0; idx < numbers.length; idx++) {
    let num = numbers[idx];
    let needed = targetSum - num;
    if (needed in nums) return [nums[needed], idx];
    nums[num] = idx;
  }

};