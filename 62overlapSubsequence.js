
// n = length of str1
// m = length of str2
// time:  O(nm)
// space: O(nm)

const overlapSubsequence = (str1, str2, idx1 = 0, idx2 = 0, memo = {}) => {
  // todo
  let key = idx1 + "," + idx2;
  if (key in memo) return memo[key];

  if (idx1 === str1.length || idx2 === str2.length) return 0;

  let max;
  if (str1[idx1] === str2[idx2]) {
    max = 1 + overlapSubsequence(str1, str2, idx1 + 1, idx2 + 1, memo);
  } else {
    max = Math.max(
      overlapSubsequence(str1, str2, idx1 + 1, idx2, memo),
      overlapSubsequence(str1, str2, idx1, idx2 + 1, memo)
    );
  }

  memo[key] = max;
  return max;
};

