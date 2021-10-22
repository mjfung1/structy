
// n = # of words in dictionary
// k = # length of longest word
// time:  O(nk)
// space: O(1)


const detectDictionary = (dictionary, alphabet) => {
  // todo
  for (let i = 0; i < dictionary.length-1; i++) {
    let current = dictionary[i];
    let next = dictionary[i+1];
    
    if (!isLexicalOrder(current, next,  alphabet)) return false;
  }
  return true;
};

const isLexicalOrder = (word1, word2, alphabet) => {
  let length = Math.max(word1.length, word2.length);
  
  for (let i = 0; i < length; i++) {
    let val1 = word1[i] === undefined ? -Infinity : alphabet.indexOf(word1[i]);
    let val2 = word2[i] === undefined ? -Infinity : alphabet.indexOf(word2[i]);
    // can automatically return true if the first char is less;
    // eg.  atmos vs belmont => a < b => no need to check further
    if (val1 < val2) return true;
    else if (val1 > val2) return false;
  }
  
  return true;
};
