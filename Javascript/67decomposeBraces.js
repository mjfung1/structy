
// s = length of string
// m = count of brace pairs
// time:  O((9^m) * s)
// space: O((9^m) * s)


const decompressBraces = (s) => {
  // todo

  const stack = [];

  for (let char of s) {
    // if char is a number
    if (!isNaN(char)) {
      stack.push(Number(char));
    } else {
      if (char === "}") {
        let string = "";
        while (typeof stack[stack.length - 1] !== "number") {
          let letter = stack.pop();
          string = letter + string;
        }
        // after while loop - the next char is a number
        let number = stack.pop();

        stack.push(string.repeat(number));
      } else if (char !== "{") {
        stack.push(char);
      }
    }
  }

  return stack.join("");
};



// ------------------------------------- //
// this one works with 2 digit number.
var decompressBraces = function (s) {
  const freq = [];
  let tempFreq = "";

  const chars = [];
  let decoded = "";

  // s = "3[a2[c]]"
  for (const char of s) {
    if (!isNaN(char)) {
      tempFreq += char; //`${tempFreq}${char}`;
    } else if (char === "{") {
      freq.push(tempFreq);
      tempFreq = "";

      chars.push(decoded);
      decoded = "";
    } else if (char === "}") {
      //start decoding
      decoded = chars.pop() + decoded.repeat(freq.pop());
    } else {
      decoded += char;
    }
  }

  return decoded;
};




// ------------------------------------

const decompressBraces = (s) => {
  // todo
  let i = 0;
  let numbers = '1234567890';
  
  const stack = [];
  
  while (i < s.length) {
    
    if (s[i] === '}') {
      
      let string = '';
      
      while (!numbers.includes(stack[stack.length - 1])) {
        let item = stack.pop();
        string = item + string;
      }
      
      let amount = stack.pop();
      let newString = string.repeat(amount);
      stack.push(newString);
      
    } else if (s[i] !== '{') {
      stack.push(s[i]);
    }

    i++;
  }

  return stack.join('');
}; 
