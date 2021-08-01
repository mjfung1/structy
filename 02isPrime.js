
// n = input number
// time:  O(square_root(n))
// space: O(1)

const isPrime = (n) => {
  // todo
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};