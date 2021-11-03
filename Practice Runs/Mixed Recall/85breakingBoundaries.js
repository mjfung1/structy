
// m = # rows
// n = # columns
// k = # moves
// Time: O(mnk)
// Space: O(mnk)


const breakingBoundaries = (rows, cols, moves, startRow, startCol, memo={}) => {
  let key = startRow + ',' + startCol + ',' + moves;
  if (key in memo) return memo[key];
  
  if (startRow < 0 || startRow === rows || startCol < 0 || startCol === cols) return 1;
  if (moves === 0) return 0;
  
  let ways = 0;
  ways += breakingBoundaries(rows, cols, moves - 1, startRow+1, startCol, memo);
  ways += breakingBoundaries(rows, cols, moves - 1, startRow-1, startCol, memo);
  ways += breakingBoundaries(rows, cols, moves - 1, startRow, startCol+1, memo);
  ways += breakingBoundaries(rows, cols, moves - 1, startRow, startCol-1, memo);
  
  memo[key] = ways;
  return ways;
};
