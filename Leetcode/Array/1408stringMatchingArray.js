// 1408. String Matching in an Array


var stringMatching = function(words) {
    const set = new Set(words);
    
    const output = new Set();
    
    for (let subString of words) {
        
        for (let word of words) {
            if (subString.length < word.length && word.includes(subString)) {
                output.add(subString);
            }
        }
    }
    
    return Array.from(output);
};