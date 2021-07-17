

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