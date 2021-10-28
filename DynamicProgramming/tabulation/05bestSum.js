
// Write a function 'bestSum(targetSum, numbers)' that takes in a 
// targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest
// combination of numbers that add up to exactly the targetSum.

// If there is a tie for the shortest combination, you may return any
// one of the shortest.

// m = targetSum;
// n = numbers length
// time: O(m^2 * n);
// space: O(m^2);

const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for (let num of numbers) {
                let arrays = [...table[i], num]
                if (i + num <= targetSum) {
                    if (table[i + num] === null || table[i + num].length > arrays.length) {
                        table[i + num] = arrays;
                    }
                }
            }
        }
    }

    return table[targetSum];
}

console.log(bestSum(5, [1, 3, 5, 7, 3, 2])) // [3, 2]