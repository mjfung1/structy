


const mergeSort = (nums) => {
  // todo
  if (nums.length <= 1) return nums;
  
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  
  let leftMergeSort = mergeSort(left);
  let rightMergeSort = mergeSort(right);
  
  return helper(leftMergeSort, rightMergeSort)
};

const helper = (arr1, arr2) => {
  const arr = [];
  
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1.shift());
    } else {
      arr.push(arr2.shift());
    }
  }
  
  arr.push(...arr1, ...arr2);
  
  return arr;
}
