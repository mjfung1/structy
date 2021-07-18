


// PURE RECURSION;
const subsets = (elements) => {
  // todo
  if (elements.length === 0) return [[]];

  let firstEle = elements[0];
  let remainderElements = elements.slice(1);
  let subsetsWithoutEle = subsets(remainderElements);
  let subsetsWithEle = subsetsWithoutEle.map((subset) => [firstEle, ...subset]);

  return [...subsetsWithout];
};




// helper recursion;
const subsets = (elements) => {
  // todo
  const output = [];
  
  function powerset(nums, set) {
    output.push(set);

    if (nums.length === 0) return;

    nums.forEach((num, idx) => {
      const copy = nums.slice(idx + 1);
      powerset(copy, [...set, num]);
    });
  }

  powerset(elements, []);

  return output;
};


// iteratively

const subsets = (elements) => {
  // todo
  const queue = [[]];
  
  for (let ele of elements) {
    for (let curr of [...queue]) {
      queue.push([...curr, ele])
    }
  }
  return queue;
};

const subsets = (elements) => {
  // todo
  const queue = [[]];
  
  for (let ele of elements) {
    let size = queue.length
    for (let curr of queue) {
      if (!size) break;
      queue.push([...curr, ele])
      size--;
    }
  }
  return queue;
};