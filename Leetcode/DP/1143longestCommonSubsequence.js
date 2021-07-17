// 1143. Longest Common Subsequence

// memoization
var longestCommonSubsequence = function (
  text1,
  text2,
  i1 = 0,
  i2 = 0,
  memo = {}
) {
  let pos = i1 + "," + i2;
  if (pos in memo) return memo[pos];
  if (i1 === text1.length || i2 === text2.length) return 0;

  let max;
  if (text1[i1] === text2[i2]) {
    max = 1 + longestCommonSubsequence(text1, text2, i1 + 1, i2 + 1, memo);
  } else {
    max = Math.max(
      longestCommonSubsequence(text1, text2, i1 + 1, i2, memo),
      longestCommonSubsequence(text1, text2, i1, i2 + 1, memo)
    );
  }

  memo[pos] = max;
  return memo[pos];
};



// tabulation
var longestCommonSubsequence = function (text1, text2) {
  let l1 = text1.length;
  let l2 = text2.length;

  const table = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(0));

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        table[i][j] = 1 + table[i - 1][j - 1];
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
  }

  return table[l1][l2];
};