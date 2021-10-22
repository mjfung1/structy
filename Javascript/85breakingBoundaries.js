

// --------------------------------------- //
// My attempt. Created a matrix to traverse.
// turns out, I don't need to create one;

const breakingBoundaries = (m, n, k, r, c) => {
  const matrix = Array.from(Array(m), () => Array(n).fill(0));

  return traverse(matrix, r, c, k);
};

const traverse = (matrix, row, col, moves, memo = {}) => {
  let key = row + "," + col + "," + moves;
  if (key in memo) return memo[key];
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length)
    return 1;
  if (moves === 0) return 0;

  let count = 0;

  count += traverse(matrix, row + 1, col, moves - 1, memo);
  count += traverse(matrix, row - 1, col, moves - 1, memo);
  count += traverse(matrix, row, col + 1, moves - 1, memo);
  count += traverse(matrix, row, col - 1, moves - 1, memo);

  memo[key] = count;
  return memo[key];
};


// ---------------------------------------- //

// m = # rows
// n = # columns
// k = # moves
// time:  O(mnk)
// space: O(mnk)

const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
  const key = `${k},${r},${c}`;
  if (key in memo) return memo[key];

  let rowOutbounds = r < 0 || r === m;
  let colOutbounds = c < 0 || c === n;

  if (rowOutbounds || colOutbounds) return 1;
  if (k === 0) return 0;

  let moves = 0;
  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let delta of deltas) {
    const [dRow, dCol] = delta;
    moves += breakingBoundaries(m, n, k - 1, r + dRow, c + dCol, memo);
  }

  memo[key] = moves;
  return moves;
};