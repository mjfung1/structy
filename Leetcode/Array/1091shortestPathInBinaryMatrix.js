
// 1091. Shortest Path in Binary Matrix

var shortestPathBinaryMatrix = function(grid) {
    let queue = [ [ 0, 0, 1 ] ];
    let visited = new Set(['0,0']);
    if (grid[0][0] !== 0) return -1;
    
    let lastRow = grid.length - 1;
    let lastCol = grid[0].length - 1;
    
    while (queue.length) {
        let [row, col, path] = queue.shift();
        
        if (row === lastRow && col === lastCol) {
            return path;
        }
            
        let steps = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1]];

        for (let step of steps) {
            let [sRow, sCol] = step;
            let newRow = row + sRow;
            let newCol = col + sCol;
            let key = newRow + ',' + newCol;

            if (isValidIndex(newRow, newCol, grid) && grid[newRow][newCol] === 0 && !visited.has(key)) {
                queue.push([newRow, newCol, path + 1]);
                visited.add(key);
            }
        }

    }
  return -1;  
};

const isValidIndex = (row, col, grid) => {
    let validRow = row >= 0 && row < grid.length;
    let validCol = col >= 0 && col < grid[0].length;
    return validRow && validCol;
};