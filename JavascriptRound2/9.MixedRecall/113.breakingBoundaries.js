


const breakingBoundaries = (m, n, k, r, c, memo={}) => {
  const key = r + ',' + c + ',' + k;
  if (key in memo) return memo[key];
  
  if (r < 0 || r === m || c < 0 || c === n) return 1;
  if (k === 0) return 0;
  
  let result = 0;
  result += breakingBoundaries(m, n, k-1, r - 1, c, memo);
  result += breakingBoundaries(m, n, k-1, r + 1, c, memo);
  result += breakingBoundaries(m, n, k-1, r, c + 1, memo);
  result += breakingBoundaries(m, n, k-1, r, c - 1, memo);
  
  memo[key] = result;
  return result;
};
