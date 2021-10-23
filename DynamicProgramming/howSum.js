// Write a function 'howSum(targetSum, numbers)' that takes in a
// targetSum and an array of numbers as arguments.

// The function should return an array containing any combination of
// elements that add up to exactly the targetSum. If there is no 
// combination that adds up to the targetSum, then return null.

// If there are multiple combinations possible, you may return any single one.

// m = target sum
// n = numbers.length
// time: O(n^m * n) brute
// time: O(n^m) memoized
// space: O(m)
const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        let remainderSum = targetSum - num;
        let result = howSum(remainderSum, numbers, memo)
        // an empty array evaluates truthy
        if (result) {
            memo[targetSum] = [...result, num]
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};

// console.log(howSum(7, [5, 3, 4, 7])) // [3,4] or [7];
// console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2] or [3, 5];
// console.log(howSum(7, [2, 4])) // null;
// console.log(howSum(0, [2, 4])) // [];
console.log(howSum(300, [7, 14])) // [];

// console.log([].length)

// if (null) console.log('im here');
// else console.log('im not here')