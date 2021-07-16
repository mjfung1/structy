
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
