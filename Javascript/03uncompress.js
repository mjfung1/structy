

// n = number of groups
// m = max num found in any group
// time:  O(n*m)
// space: O(n*m)

// USING TWO POINTERS
const uncompress = (s) => {
  let result = [];
  const numbers = '0123456789';
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join('');
};


// ------------------------------------- //

const uncompress = (s) => {
  // todo
  let i = 0;
  let j = 0;
  
  const output = [];
  
  while (j < s.length) {
    if (!isNaN(s[j])) {
      j++;
    } else {
      let num = Number(s.slice(i, j));
      for (let i = 0; i < num; i++) {
        output.push(s[j]);
      }
      j++;
      i = j;
    }
  }
  return output.join('');
};

// ------------------------------ // 

const uncompress = (s) => {
  // todo
  let nums = new Set(['1','2','3','4','5','6','7','8','9','0'])
  let i = 0;
  let j = 0;

  let word = '';
  while (j < s.length) {
    
    while (nums.has(s[j])) j++;
  
    
    let num = Number(s.slice(i, j));    
    let letter = s[j];

    word += letter.repeat(num);

    j++;
    i = j;
  }

  return word;
};

