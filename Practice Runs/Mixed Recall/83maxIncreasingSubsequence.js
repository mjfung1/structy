

// n = length of array
// Time: O(n^2)
// Space: O(n^2)

const maxIncreasingSubseq = (numbers, prev=-Infinity, i = 0, memo={}) => {
  // todo
  let key = i + ',' + prev;
  if (key in memo) return memo[key];
  
  if (i === numbers.length) return 0;
  let num = numbers[i];
  
  let withNum = 0;
  if (prev < num) {
    withNum =  1 + maxIncreasingSubseq(numbers, num, i+1, memo);
  }
 
  let withoutNum = maxIncreasingSubseq(numbers, prev, i+1, memo);
  
  memo[key] = Math.max(withoutNum, withNum)
  return Math.max(withoutNum, withNum);
};