
// n = array size
// time:  O(nlogn)
// space: O(n)

const mergeSort = (nums) => {
  // todo
  // idea of merge sort => an array of length 1 is sorted;

  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  // expect mergeSort to return an array;
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

const merge = (arr1, arr2) => {
  arr1.reverse();
  arr2.reverse();
  const merged = [];

  while (arr1.length || arr2.length) {
    let ele1 = arr1.length ? arr1[arr1.length - 1] : Infinity;
    let ele2 = arr2.length ? arr2[arr2.length - 1] : Infinity;
    if (ele1 < ele2) {
      merged.push(arr1.pop());
    } else {
      merged.push(arr2.pop());
    }
  }

  return merged;
};
