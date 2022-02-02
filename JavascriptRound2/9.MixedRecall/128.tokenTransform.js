
const tokenTransform = (s, tokens) => {
  // todo
  const output = [];
  let i = 0;
  let j = 1;
  
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      i += 1;
      j = i + 1;
    } else if (s[j] !== '$') {
      j += 1;
    } else {
      // s[i] and s[j] === '$';
      let key = s.slice(i, j + 1);
      let value = tokens[key];
      let computedValue = tokenTransform(value, tokens);
      tokens[key] = computedValue;  
      output.push(computedValue);
      i = j + 1;
      j = i + 1;
    }
  }

  return output.join('');
};