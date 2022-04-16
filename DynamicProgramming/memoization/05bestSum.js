

// Write a function 'bestSum(targetSum, numbers)' that takes in a
// targetSum and a array of numbers as arguments.

// The function should return an array containing the shortest 
// combination of numbers that add up to exactly the targetSum.

// If there is a tie for the shortest combination, you may return any
// oen of the shortest.

// m = target sum
// n = numbers.length

// Brute Force
// time: O(n^m * m)
// space: O(m * m)

// Memoized
// time: O(n * m^2 )
// space: O(m^2)


const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        let remainder = targetSum - num;
        let remainderCombination = bestSum(remainder, numbers, memo);
        
        if (remainderCombination !== null) {
            let combination = [ ...remainderCombination, num ];

            if (shortestCombination === null || remainderCombination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]