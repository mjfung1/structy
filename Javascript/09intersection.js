

// brute force (timeout)
// n = length of array a, m = length of array b
// time:  O(n*m)
// space: O(min(n,m))

const intersection = (a, b) => {
  const result = [];
  for (let item of b) {
    if (a.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// ------------------------------ //
// n = length of array a, m = length of array b
// time:  O(n+m)
// space: O(n)
// using set (pass)
const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};


// ----------------------------------- //

const intersection = (a, b) => {
  // todo
  let nums = new Set(a);
  
  return b.filter(num => nums.has(num));
};
