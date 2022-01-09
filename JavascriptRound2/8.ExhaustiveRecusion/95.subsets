


const subsets = (elements) => {
  // todo
  if (elements.length === 0) return [ [] ];
  
  let first = elements[0];
  
  let withoutFirst = subsets(elements.slice(1));
  
  let withFirst = withoutFirst.map(subarray => [first, ...subarray]);
  
  return [...withFirst, ...withoutFirst];
};