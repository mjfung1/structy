


const createCombinations = (items, k) => {
  // todo
  if (items.length < k) return [];
  if (k === 0) return [[]];
  
  let first = items[0];
  let remaining = items.slice(1);
  
  let withoutFirst = createCombinations(remaining, k);
  let withFirst = createCombinations(remaining, k - 1);
  
  let combo = [];
  for (let sub of withFirst) {
    combo.push([first, ...sub]);
  }
  
  return [...withoutFirst, ...combo];
};
