
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

