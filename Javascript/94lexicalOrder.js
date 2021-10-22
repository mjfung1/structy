

// n = length of shorter string
// time:  O(n)
// space: O(1)


const lexicalOrder = (word1, word2, alphabet) => {
  // todo
  let length = Math.max(word1.length, word2.length);
  
  for (let i = 0; i < length; i++) {
    let char1 = word1[i];
    let char2 = word2[i];
    
    let val1 = alphabet.indexOf(char1);
    let val2 = alphabet.indexOf(char2);
    
    if (val1 < val2) {
      return true;
    } else if (val1 > val2) {
      return false;
    }
  }
  
  return true;
};
