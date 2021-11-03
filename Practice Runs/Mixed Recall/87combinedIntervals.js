
// n = number of intervals
// Time: O(nlogn)
// Space: O(n)

const combineIntervals = (intervals) => {
  intervals.sort((a,b) => a[0] - b[0]);
  const combined = [ intervals[0] ];
  
  for (let interval of intervals) {
    let [prevStart, prevEnd] = combined[combined.length - 1];
    let [currStart, currEnd] = interval;
    
    if (currStart <= prevEnd) {
      combined[combined.length - 1][1] = Math.max(prevEnd, currEnd);
    } else {
      combined.push(interval);
    }
  }
  return combined;
}