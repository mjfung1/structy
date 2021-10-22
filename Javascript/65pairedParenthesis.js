
// n = length of string
// time:  O(n)
// space: O(1)

const pairedParentheses = (str) => {
  // todo
  let openParenthesis = 0;

  for (let char of str) {
    if (char === "(") {
      openParenthesis++;
    } else if (char === ")") {
      if (!openParenthesis) return false;
      openParenthesis--;
    }
  }

  return openParenthesis === 0;
};


