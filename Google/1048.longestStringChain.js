

// 1048. Longest String Chain


// dfs from each word. get all possible substring from each word.
// to see if it contains in words. find length. and see whos longest
var longestStrChain = function(words) {
    
    let set = new Set(words);
    
    let max = 0;
    
    for (let word of words) {
        let attempt = findChainLength(word, set);
        max = Math.max(max, attempt);
    }
    
    return max;
};

const findChainLength = (word, setOfWords, memo ={}) => {
    if (!(setOfWords.has(word))) return 0;
    if (word in memo) return memo[word];
    
    let max = 0;
    // key is to dfs all substrings and find length;
    for (let i = 0; i < word.length; i++) {
        let newString = word.slice(0, i) + word.slice(i + 1);
        
        // find length of chain for all substring of words by deleting one char
        let attempt = 1 + findChainLength(newString, setOfWords, memo);
        max = Math.max(max, attempt);
    }
    
    memo[word] = max;
    return max;
}