

// a = amount
// c = # coins
// time:  O(a*c)
// space: O(a)

const minChange = (amount, coins, memo={}) => {
  // todo
  if (amount === 0) return 0;
  if (amount < 0) return -1;
  
  if (amount in memo) return memo[amount];
  let min = Infinity;
  
  for (let coin of coins) {
    let attempt = minChange(amount - coin, coins, memo);
    if (attempt >= 0 && attempt < min) min = attempt + 1;
  }
  
  memo[amount] = min; 
  
  return min === Infinity ? -1 : memo[amount];
  
};

// -------------------------------------- // 

const minChange = (amount, coins) => {
  let answer = _minChange(amount, coins);
  return answer === Infinity ? -1 : answer;
};

const _minChange = (amount, coins, memo={}) => {
  if (amount === 0) return 0;
  
  // bc we're using Math.min thus +Infinity to exclude answer;
  if (amount < 0) return Infinity;
  
  if (amount in memo) return memo[amount];
  
  let min = Infinity;
  for (let coin of coins) {
    let attempt = 1 + _minChange(amount - coin, coins, memo);
    if (attempt < min) min = attempt;
  }
  
  memo[amount] = min;
  return min;
};





