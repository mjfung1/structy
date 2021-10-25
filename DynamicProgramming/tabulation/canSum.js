// n = amount;
// time: O(n);
// space: O(n);

const canSum = (amount, numbers) => {
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
