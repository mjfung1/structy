


const maxIncreasingSubseq = (numbers, i = 0, prev=-Infinity, memo={}) => {
  // todo
  let key = i + ',' + prev;
  if (key in memo) return memo[key];
  if (i === numbers.length) return 0;
  
  let firstNum = numbers[i];
  let take = 1 + maxIncreasingSubseq(numbers, i+1, firstNum, memo);
  let dontTake = maxIncreasingSubseq(numbers, i+1, prev, memo);
  
  let result;
  if (firstNum > prev) {
    result = Math.max(take, dontTake);
  } else {
    result = dontTake;
  }
  
  memo[key] = result;
  return result;
};
