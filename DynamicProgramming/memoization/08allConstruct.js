// Write a function 'allConstruct(target)' that accepts a
// target string and an array of strings.

// The function should return a 2D array containing all of the ways
// that the 'target' can be constructed by concatenating elements of 
// the 'wordBank' array. Each element of the 2D array should represent
// one combination that constructs the 'target'/

// You may reuse elements of 'wordBank' as many times as needed.


const allConstruct = ( target, wordBank ) => {
    if (target === '') return [ [] ];

    const output = [];

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            
            let combination = allConstruct(target.slice(word.length), wordBank);
            // combination.forEach(sub => output.push([ word, ...sub ])):

            for (let sub of combination) {
                output.push([ word, ...sub ]);
            }
            // output.push(...complete);
        }

    }
    return output;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));