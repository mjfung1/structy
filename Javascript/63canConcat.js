
// s = length of string
// w = # of words
// time:  ~O(sw)
// space: O(s)

const canConcat = (s, words, memo = {}) => {
  // todo
  if (s in memo) return memo[s];
  if (s.length === 0) return true;

  for (let word of words) {
    if (s.startsWith(word)) {
      let suffix = s.slice(word.length);
      if (canConcat(suffix, words, memo)) {
        memo[s] = true;
        return true;
      }
    }
  }
  memo[s] = false;
  return false;
};


// tabulation

const canConcat = (s, wordDict) => {
  // todo
  
  const table = Array(s.length+1).fill(false);
  table[0] = true;

  for (let i = 0; i <= s.length; i++) {
      if (!table[i]) continue;
      for (const word of wordDict) {
          let temp = s.slice(i, i + word.length)
          if (word === temp) table[i+word.length] = true;
      }
  }

  return table[s.length];
  
};