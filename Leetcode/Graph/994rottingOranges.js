
var orangesRotting = function (grid) {
  let rottenOranges = new Set();
  let freshOranges = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let pos = row + "," + col;
      if (grid[row][col] === 2) rottenOranges.add(pos);
      if (grid[row][col] === 1) freshOranges.add(pos);
    }
  }

  if (freshOranges.size === 0) return 0;

  let queue = [];
  for (let pos of rottenOranges) {
    const [row, col] = pos.split(",").map(Number);
    queue.push([row, col, 0]);
  }

  // let time;

  while (queue.length) {
    const [row, col, distance] = queue.shift();
    time = distance;
    let deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let [deltaRow, deltaCol] of deltas) {
      let newRow = row + deltaRow;
      let newCol = col + deltaCol;
      let pos = newRow + "," + newCol;

      if (isInbounds(grid, newRow, newCol) && grid[newRow][newCol] === 1) {
        freshOranges.delete(pos);
        grid[newRow][newCol] = 2;

        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }

  if (freshOranges.size > 0) return -1;
  else return time;
};

const isInbounds = (grid, row, col) => {
  let inboundRow = 0 <= row && row < grid.length;
  let inboundCol = 0 <= col && col < grid[0].length;
  return inboundRow && inboundCol;
};