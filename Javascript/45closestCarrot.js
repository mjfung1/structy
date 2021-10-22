const closestCarrot = (grid, startRow, startCol) => {
  // todo
  const queue = [ [startRow, startCol, 0] ];
  let visited = new Set( startRow + ',' + startCol );

  while (queue.length) {
    const [row, col, distance] = queue.shift();
    let moves = [[1,0],[-1,0],[0,1],[0,-1]];

    if (grid[row][col] === 'C') return distance;

    for (const [rowIdx, colIdx] of moves) {
      let newRow = row + rowIdx;
      let newCol = col + colIdx;

      let rowInBounds = 0 <= newRow && newRow < grid.length;
      let colInBounds = 0 <= newCol && newCol < grid[0].length;

      let pos = newRow + ',' + newCol;

      if (rowInBounds && colInBounds && !visited.has(pos) && grid[newRow][newCol] !== 'X') {
        visited.add(pos);
        queue.push( [ newRow, newCol, distance + 1 ] )
      }

    }

  }

  return -1;
};

// -----------------------------------------------------------//

const closestCarrot = (grid, startRow, startCol) => {
  // todo
  const queue = [[startRow, startCol, 0]];

  while (queue.length) {
    const [row, col, distance] = queue.shift();
    let moves = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    if (grid[row][col] === "C") return distance;

    grid[row][col] = "X";

    for (const [rowIdx, colIdx] of moves) {
      let newRow = row + rowIdx;
      let newCol = col + colIdx;

      let rowInBounds = 0 <= newRow && newRow < grid.length;
      let colInBounds = 0 <= newCol && newCol < grid[0].length;

      if (rowInBounds && colInBounds && grid[newRow][newCol] !== "X") {
        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }

  return -1;
};
