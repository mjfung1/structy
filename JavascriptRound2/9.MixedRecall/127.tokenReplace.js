

const tokenReplace = (s, tokens) => {
  // todo
  let i = 0;
  let j = 1;
  
  let output = [];
  
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      i++;
      j = i + 1;
    } else if (s[j] !== '$') {
      j++;    
    } else {
        let word = s.slice(i, j + 1);
        let value = tokens[word];
        output.push(value);
        i = j + 1;
        j = i + 1;
    }
  }
  
  return output.join('');
};