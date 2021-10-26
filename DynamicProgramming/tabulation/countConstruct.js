

// Write  a function 'countConstruct(target, wordBank)' that accepts a
// target string and an array of strings.

// The function should return the number of ways that the 'target'
// can be constructed by concatenating elements of the 'wordBank' array.

// You may reuse elements of 'wordBank' as many times as needed.

// m = target
// n = wordBank length
// time: O(m^2 * n)
// space: O(m) 
const countConstruct = (target, wordBank) => {
    let table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] !== 0) {
            for (let word of wordBank) {
                let temp = target.slice(i, i + word.length);
                if (word === temp) {
                    table[i + word.length] += table[i]
                }
            }
        }
    }
    console.log(table)
    return table[target.length];
};


console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2