

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