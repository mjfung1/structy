

// n = length of the string
// time:  O(s^2)
// space: O(s^2)

const maxPalinSubsequence = (
  str,
  left = 0,
  right = str.length - 1,
  memo = {}
) => {
  // todo
  let key = left + "," + right;
  if (key in memo) return memo[key];
  if (left === right) return 1;

  if (left > right) return 0;

  let max;
  if (str[left] === str[right]) {
    max = 2 + maxPalinSubsequence(str, left + 1, right - 1, memo);
  } else {
    max = Math.max(
      maxPalinSubsequence(str, left + 1, right, memo),
      maxPalinSubsequence(str, left, right - 1, memo)
    );
  }

  memo[key] = max;
  return memo[key];
};

