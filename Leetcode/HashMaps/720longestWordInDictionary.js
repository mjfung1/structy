
// 720. Longest Word in Dictionary

var longestWord = function(words) {
    words.sort();
    let max = 0;
    let counter = {};
    let valid = {};
    
    for (let i = words.length - 1; i >= 0; i--) {
        let currWord = words[i];
        if (!(currWord in counter)) counter[currWord] = new Set();
        
        for (let j = i - 1; j >= 0; j--) {
            let nextWord = words[j];
            
            if (currWord.startsWith(nextWord)) {
                counter[currWord].add(nextWord);
            }
            
            
        }
    }

    for (let word of words) {

        if (counter[word].size === word.length - 1) {
            valid[word] = counter[word]
            max = Math.max(max, counter[word].size);
        }
    }
   
    for (let word of words) {
        if ((word in valid) && valid[word].size === max) return word;
    }
    
    return '';
};