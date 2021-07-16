

// a = amount
// c = # coins
// time:  O(a*c)
// space: O(a*c)

const countingChange = (amount, coins, i = 0, memo = {}) => {
  // todo
  let key = amount + "," + i;

  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  if (i === coins.length) return 0;

  let count = 0;

  // cannot do it normal way bc we get repeated!!
  // instead we're passing different amount of same coins to avoid repeated
  for (let quantity = 0; quantity * coins[i] <= amount; quantity++) {
    let remainder = amount - quantity * coins[i];

    count += countingChange(remainder, coins, i + 1, memo);
  }

  memo[key] = count;
  return memo[key];
};

