
// n = length of numbers array
// time:  O(logn)
// space: O(1)

const binarySearch = (numbers, target) => {
  // todo
  let left = 0;
  let right = numbers.length-1;
  
  while (left <= right) {
    let mid = ~~((left + right) / 2);
    if (target === numbers[mid]) {
      return mid;
    } else if (target > numbers[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};


// ------------------------------------------------- //

// RECURSIVE  

const binarySearch = (numbers, target, left=0, right=numbers.length-1) => {
  if (left > right) return -1;
  // todo
  let mid = Math.floor((left + right) / 2);
  
  if (target === numbers[mid]) {
    return mid;
  } else if (target > numbers[mid]) {
    return binarySearch(numbers, target, mid+1, right);
  } else {
    return binarySearch(numbers, target, left, mid-1);
  }
};