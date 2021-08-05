// n = length of string
// Time: O(n)
// Space: O(n)

const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(String(num), s[i]);
      }
      i = j;
    }
  }
  
  return result.join('');
};



// -------------------------------------- //
const compress = (s) => {
  // todo
  const output = [];
  let i = 0;
  let j = 0;
  let num;
  while (j < s.length) {
    
    while(s[i] === s[j]) j++;
    
    (j-i === 1) ? (num = '') : (num = j-i);
    let letter = s[i];
    
    output.push(num+letter);
    i = j;
  }
  
  return output.join('');
};


