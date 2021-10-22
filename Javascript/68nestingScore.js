


// n = length of string
// Time: O(n)
// Space: O(n)

const nestingScore = (str) => {
  // todo
  // why initialize with zero??
  // bc if given an empty str we can return zero
  const stack = [0];

  for (let bracket of str) {
    if (bracket === "[") {
      stack.push(0);
    } else {
      let popped = stack.pop();

      // means direct bracket
      if (popped === 0) {
        stack[stack.length - 1] += 1;
      } else {
        let multiplier = 2 * popped;
        stack[stack.length - 1] += multiplier;
      }
    }
  }
  return stack[0];
};

