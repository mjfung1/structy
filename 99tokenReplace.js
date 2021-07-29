
// n = length of string
// time:  O(n)
// space: O(n)


const tokenReplace = (s, tokens) => {
  // todo
  const output = [];
  
  let i = 0;
  let j = i + 1;
  
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      i++;
      j++;
      // means that s[i] is a "$"
    } else if (s[j] !== '$') {
      j++;
    } else {
      let word = s.slice(i, j+1);
      output.push(tokens[word]);
      i = j+1;
      j = i+1;
    }
  }
  return output.join('');
};
