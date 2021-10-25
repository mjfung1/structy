
// a = amount
// n = length of numbers
// time:  O(a*n)
// space: O(a)

const sumPossible = (amount, numbers, memo = {}) => {
  // todo
  if (amount === 0) return true;
  if (amount < 0) return false;

  if (amount in memo) return memo[amount];

  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return memo[amount];
    }
  }

  memo[amount] = false;
  return memo[amount];
};



// ----------------------------------- //
// tabulation

// n = amount
// m = numbers
// time: O(m * n);
// space: O(n);

const sumPossible = (amount, numbers) => {
  let table = Array(amount + 1).fill(false);
  table[0] = true;
  
  for (let i = 0; i <= amount; i++) {
    if (table[i] === true) {
      for (let number of numbers) {
        table[i + number] = true;
      }
    }
  }
  
  return table[amount];
};
