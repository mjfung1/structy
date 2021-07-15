
// n = length of nums
// time:  O(n * sqrt(n))
// space: O(n)

const summingSquares = (n, memo = {}) => {
  // todo
  if (n === 0) return 0;
  if (n < 0) return Infinity;

  if (n in memo) return memo[n];

  let minSquares = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    let square = i * i;

    let numSquares = 1 + summingSquares(n - square, memo);

    minSquares = Math.min(minSquares, numSquares);
  }

  memo[n] = minSquares;
  return memo[n];
};

