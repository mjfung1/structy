// 72. Edit Distance

// memoization
var minDistance = function (word1, word2, m = 0, n = 0, memo = {}) {
  let key = m + "," + n;
  if (key in memo) return memo[key];

  if (m === word1.length) return word2.length - n;
  if (n === word2.length) return word1.length - m;

  let min;
  if (word1[m] === word2[n]) {
    min = minDistance(word1, word2, m + 1, n + 1, memo);
  } else {
    min = Math.min(
      1 + minDistance(word1, word2, m + 1, n, memo), // insert
      1 + minDistance(word1, word2, m, n + 1, memo), // delete
      1 + minDistance(word1, word2, m + 1, n + 1, memo) // replace
    );
  }

  memo[key] = min;
  return min;
};