

// n = length of the string, m = length of largest parenthetical group
// Time: ~O(m^n)
// Space: ~O(m^n) 

const parentheticalPossibilities = (s) => {
  // todo
  if (s.length === 0) return [""];
  let allPossibilities = [];

  let { choices, remainder } = getChoices(s);
  for (let choice of choices) {
    for (let sub of parentheticalPossibilities(remainder)) {
      allPossibilities.push(choice + sub);
    }
  }

  return allPossibilities;
};

const getChoices = (s) => {
  if (s[0] === "(") {
    let end = s.indexOf(")");
    let choices = s.slice(1, end);
    let remainder = s.slice(end + 1);

    return { choices, remainder };
  } else {
    let choices = s[0];
    let remainder = s.slice(1);

    return { choices, remainder };
  }
};