
// 1306. Jump Game III


var canReach = function (arr, start, visited = new Set()) {
  if (visited.has(start)) return false;
  if (start < 0 || start >= arr.length) return false;

  if (!arr[start]) return true;

  let jump = arr[start];

  visited.add(start);
  return (
    canReach(arr, start + jump, visited) || canReach(arr, start - jump, visited)
  );
};
