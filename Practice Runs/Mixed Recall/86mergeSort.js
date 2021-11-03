


// split until single or empty array b/c sorted;
// then merge them;
const mergeSort = (nums) => {
  if (nums.length < 2) return nums;
  
  let mid = Math.floor(nums.length / 2);
  
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));
  
  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let merged = [];
  
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  
  }
  
  merged.push(...arr1, ...arr2);
  return merged;
};
