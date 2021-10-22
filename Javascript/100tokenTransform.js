
// n = length of longest string of value
// m = # of unique tokens
// time:  ~O(n^m)
// space: ~O(n^m)

const tokenTransform = (s, tokens) => {
  // todo
  // if (!s.length) return '';
  const output = [];
  
  let i = 0;
  let j = 1;
  
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      i++;
      j++;
    } else if (s[j] !== '$') {
      j+=1;
    } else {
      let key = s.slice(i, j+1);
      let value = tokens[key];
      // passing in a smaller subset of word s
      let evaluatedValue = tokenTransform(value, tokens);
      // updating tokens key.  actually replacing its values
      tokens[key] = evaluatedValue;
      output.push(evaluatedValue);
      
      i=j+1;
      j=i+1;
    }
  }
  return output.join('');
};