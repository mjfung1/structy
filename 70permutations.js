
// n = length of items array
// time:  ~O(n!)
// space: ~O(n!)

const permutations = (items) => {
  // todo
  // empty array -> a nested array is the only possible permutation
  if (!items.length) return [[]];

  let first = items[0];
  let remaining = items.slice(1);

  // just think you are calling with base case, an empty array [].
  // what will it return? ->  Ans: [[]];
  let perms = permutations(remaining);

  const fullPermutations = [];

  for (let perm of perms) {
    // putting first element in every position of perm;
    for (let i = 0; i <= perm.length; i++) {
      fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  return fullPermutations;
};



// ---------------------------------------- //

// helper recursion
// struggled - almost got it
const permutations = (items) => {
  // todo
  const output = [];

  function dfs(items, perm) {
    if (items.length === 0) return output.push(perm);

    items.forEach((num, idx) => {
      let arrayWithoutNum = [...items];
      arrayWithoutNum.splice(idx, 1);
      dfs(arrayWithoutNum, [...perm, num]);
    });
  }

  dfs(items, []);

  return output;
};