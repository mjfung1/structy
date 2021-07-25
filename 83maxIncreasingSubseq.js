
// n = length of array
// time:  O(n^2)
// space: O(n^2)

const maxIncreasingSubseq = (
  numbers,
  i = 0,
  previous = -Infinity,
  memo = {}
) => {
  // todo
  let key = i + "." + previous;
  if (key in memo) return memo[key];
  if (i === numbers.length) return 0;

  let options = [];
  let dontTake = maxIncreasingSubseq(numbers, i + 1, previous, memo);
  options.push(dontTake);

  let current = numbers[i];
  if (current > previous) {
    let take = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
    options.push(take);
  }

  memo[key] = Math.max(...options);
  return memo[key];
};
