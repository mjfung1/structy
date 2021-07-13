const tribonacci = (n, memo = {}) => {
  // todo
  if (memo[n]) return memo[n];
  if (n < 2) return 0;
  if (n === 2) return 1;

  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
};


// ------------------------------------------ //


const tribonacci = (n, memo) => {
  // todo
  let tab = [0, 0, 1];

    for (let i = 3; i <= n; i++) {
    tab[i] = tab[i - 1] + tab[i - 2] + tab[i-3];
  }
  return tab[n];
};
