
// 694. Number of Distinct Islands


var numDistinctIslands = function(grid) {
    const visited = new Set();
    const islands = new Set();
    for (let row = 0;  row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let key = row + ',' + col;
            if (grid[row][col] === 1 && !visited.has(key)) {
                let island = markIt(row, col, grid, visited);
                islands.add(island);
            }
        }
    }

    return islands.size;
};

const inbounds = (row, col, grid) => {
    let inRows = row >= 0 && row < grid.length;
    let inCols = col >= 0 && col < grid[0].length;
    return inRows && inCols;
}

const markIt = (row, col, grid, visited) => {
    if (!inbounds(row, col, grid)) return '';
    if (grid[row][col] === 0) return '';
    
    let key = row + ',' + col;
    if (visited.has(key)) return '';
    visited.add(key);
    
    let pathSignature = '';
    
    let steps = [ [1,0,'r'], [-1,0,'l'], [0,1,'u'], [0,-1,'d'] ];
    for (let [deltaRow, deltaCol, dir] of steps) {
        pathSignature += dir;
        pathSignature += markIt(row + deltaRow, col + deltaCol, grid, visited)
    } 
    
    return pathSignature;
};
