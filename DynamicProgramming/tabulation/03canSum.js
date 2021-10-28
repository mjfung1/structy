

// Write a function 'canSum(targetSum, numbers)' that takes in a
// targetSum and an array of numbers as arguments.Write

// The function should return a boolean indicating whether or not it 
// is possible to generate the targetSum using numbers from the array.Write

// You may use an element of the array as many times as needed.

// You may assume that all input numbers are nonnegative.


// n = amount;
// time: O(n * m);
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
