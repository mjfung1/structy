
// 392. Is Subsequence


var isSubsequence = function (s, t, idxS = 0, idxT = 0) {
  if (idxS > s.length - 1) return true;
  if (idxT > t.length - 1) return false;

  if (s[idxS] === t[idxT]) {
    return isSubsequence(s, t, idxS + 1, idxT + 1);
  } else {
    return isSubsequence(s, t, idxS, idxT + 1);
  }
};