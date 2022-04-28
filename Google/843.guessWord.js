
// 843. Guess the Word


var findSecretWord = function(wordlist, master) {
    let wordlistSet = new Set(wordlist);
    
    let numGuesses = 10;
    while (numGuesses > 0 && wordlistSet.size) {
        
        let idx = pickRandomIndex(wordlistSet.size);
        let arr = [...wordlistSet];
        let firstWord = arr[idx];
        
        // get amount of matching chars thru master
        let numOfMatchingChars = master.guess(firstWord);
        
        // prune wordlistSet. Only select words with same amount of numOfMatchingChars
        prune(firstWord, numOfMatchingChars, wordlistSet);
        
        
        numGuesses--;
    }
};

function pickRandomIndex(length){
    return Math.floor(Math.random() * length)
}


const countMatch = (word1, word2) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) count++;
    }
    return count;
};

const prune = (firstWord, numMatching, wordlist) => {
    let toRemove = [];
    for (let word of wordlist) {
        console.log(word)
        let amountMatches = countMatch(word, firstWord);
        
        if (amountMatches !== numMatching) {
            toRemove.push(word);
        }
    }
    
    for (let word of toRemove) {
        wordlist.delete(word);
    }
};


