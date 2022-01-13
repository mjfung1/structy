



const binarySearch = (numbers, target) => {
  // todo
  let i = 0;
  let j = numbers.length - 1;
  
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
    
  }
  return -1;
};