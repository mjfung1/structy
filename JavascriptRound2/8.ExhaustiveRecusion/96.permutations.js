


const permutations = (items) => {
  // todo
  if (items.length === 0) return [[]];
  
  let first = items[0];
  
  let perms = permutations(items.slice(1));  // [[]]
  
  let fullPermutations = [];
  
  for (let subarr of perms) {
    
    for (let i = 0; i <= subarr.length; i++) {
      fullPermutations.push([...subarr.slice(0,i), first, ...subarr.slice(i)])
    }
  }
  
  return fullPermutations;
};