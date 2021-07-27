
// n = number of intervals
// time:  O(nlogn)
// space: O(n)


const combineIntervals = (intervals) => {
  // todo
  // sorting by start time
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for (let interval of intervals) {
    if (!result.length) {
      result.push(interval);
    } else {
      let prevEndTime = result[result.length - 1][1];

      let [start, end] = interval;

      if (start <= prevEndTime) {
        result[result.length - 1][1] = Math.max(end, prevEndTime);
      } else {
        result.push(interval);
      }
    }
  }

  return result;
};

