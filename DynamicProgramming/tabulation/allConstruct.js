// Write a function 'allConstruct(target)' that accepts a
// target string and an array of strings.

// The function should return a 2D array containing all of the ways
// that the 'target' can be constructed by concatenating elements of 
// the 'worBank' array. Each element of the 2D array should represent
// one combination that constructs the 'target'/

// You may reuse elements of 'wordBank' as many times as needed.

// m = target length
// n = wordBank length
// time: O(n^m);
// space: O(n^m);
const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];
    console.log(table);

    for (let i = 0; i <= target.length; i++) {

        for (let word of wordBank) {
            let temp = target.slice(i, i + word.length);
            if (temp === word) {
                table[i + word.length].push(...table[i].map(subarray => [...subarray, word]))
            }
        }
    }

    return table[target.length];
};

// console.log(allConstruct('hello angel', ['he', 'll', 'o', 'gel', 'an']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));