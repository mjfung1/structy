// memoization
// s = length of string
// w = # of words
// time:  ~O(sw)
// space: O(s)

const _quickestConcat = (s, words, memo = {}) => {
  // todo
  if (s in memo) return memo[s];
  if (s === "") return 0;

  let min = Infinity;
  for (let word of words) {
    if (s.startsWith(word)) {
      let answer = 1 + _quickestConcat(s.slice(word.length), words, memo);
      min = Math.min(min, answer);
    }
  }

  memo[s] = min;
  return min;
};

const quickestConcat = (s, words) => {
  // todo
  let answer = _quickestConcat(s, words);
  return answer === Infinity ? -1 : answer;
};



// ------------------------------------
// tabulation

const quickestConcat = (s, words, memo={}) => {
  // todo
  let table = Array(s.length + 1).fill(-1);
  table[0] = 0;
  for (let i = 0; i <= s.length; i++) {
    if (table[i] !== -1) {
      let temp = s.slice(i);
      
      for (let word of words) {
        if (temp.startsWith(word)) {
        
          if (table[i + word.length] === -1) {
            table[i + word.length] = table[i] + 1;        
          } else {
            table[i + word.length] = Math.min(table[i] + 1, table[i + word.length]);
          }
        }
      }
    }
  
  }

  return table[s.length];
};