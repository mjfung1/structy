
// n = length of string
// time:  O(n)
// space: O(n)

const befittingBrackets = (str) => {
  // todo
  let brackets = { "[": "]", "(": ")", "{": "}" };

  const stack = [];

  for (let bracket of str) {
    if (bracket in brackets) {
      stack.push(bracket);
    } else {
      let openBracket = stack.pop();
      if (brackets[openBracket] !== bracket) return false;
    }
  }

  return stack.length === 0;
};