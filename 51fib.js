

// DP - memoization - recursion with cache
const fib = (n, memo) => {
  // todo
  if (memo[n]) return memo[n];
  if (n <= 1) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// DP - tabulation
const fib = (n) => {
  // todo
  const tab = [0, 1];

  for (let i = 2; i <= n; i++) {
    tab[i] = tab[i - 1] + tab[i - 2];
  }
  return tab[n];
};


