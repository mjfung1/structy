
// Write a function 'canConstruct(target, wordBank)' that accepts a
// target string and an array of strings.

// The function should return a boolean indicating whether or not the
// 'target' ca be constructed by concatenating elements of the 
// 'wordBank' array.

// You may resuse elements of 'wordBank' as many times as needed.

// n = str length;
// m = wordBank length;
// time: O(n ^ 2 * m);
// space: O(n) space;

const canConstruct = (str, wordBank) => {
    let table = Array(str.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= str.length + 1; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                let tempWord = str.slice(i, i + word.length);
                if (word === tempWord) table[i + word.length] = true;
            }
        }
    }
    
    return table[str.length];
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'board'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
