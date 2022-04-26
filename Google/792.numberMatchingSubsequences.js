

// 792. Number of Matching Subsequences
// brute force.
// used caches for repeated work;

var numMatchingSubseq = function(s, words) {
    let answer = 0;
    let cache = new Set();
    let notMatch = new Set();
    
    for (let word of words) {
        if (notMatch.has(word)) continue;
        
        if (cache.has(word)) {
            answer++;
        } else {
            
            if (isSubSequence(word, s) === true) {
                cache.add(word)
                answer++;
            } else {
                notMatch.add(word);
            }
        }
    }
    
    return answer;
};

const isSubSequence = (word, target) => {
  let i = 0;
    
    for (let targetChar of target) {
        if (targetChar === word[i]) {
            i++;
        }
        // if i is able to reach to the end of word then its subsequence
        if (i === word.length) return true;
    }
    return false;
    
    
};


// using buckets
var numMatchingSubseq = function(s, words) {
    const hash = {};
    for (let char of s) {
        hash[char] = [];
    }
    // initialize first letter of each word of words and push to array;
    for (let word of words) {
        let firstChar = word[0];
        if (firstChar in hash) {
            hash[firstChar].push(word);
            
        }
    }
    
    let output = 0;
    
    for (let char of s) {
        
        
        let size = hash[char].length;
        
        while (size--) {
            // very important to use fifo. order matters.
            // if use pop() - order messes up
            let word = hash[char].shift();
            // if get to this stage. means subsequence
            if (word.length === 1) {
                output++;
            } else {
                
                let char2 = word[1];
                // keep reducing words until empty string
                if (char2 in hash) {
                    hash[char2].push(word.slice(1));
                    
                }
            }
        
        }
        
    }
    
    return output;
    
};