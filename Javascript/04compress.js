
// using two pointers

// n = length of string
// time:  O(n)
// space: O(n)

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



// ------------------------------------- //
// Using a stack;
// time:  O(n);
// space: O(n);
const compress = (s) => {
  // todo
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    
    let last = stack[stack.length-1];
    if (stack.length && letter === last[1]) {
        last[0] += 1;
    } else {
      stack.push([1, letter]);
    }
  }
  
  let output = [];
  
  for (let [num, char] of stack) {
    if (num === 1) {
      output.push(char);
    } else {
      output.push(num, char);
    }
  }
  
  return output.join('');
};




