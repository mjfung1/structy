
// 463. Island Perimeter


var islandPerimeter = function(grid) {
    const visited = new Set();
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                return dfs(row, col, grid, visited)
            }
        }
    }
};

const dfs = (row, col, grid, visited) => {
    if (row < 0 || row === grid.length || col < 0 || col === grid[0].length) return 1;
    if (grid[row][col] === 0) return 1;
    let key = row + ',' + col;
    if (visited.has(key)) return 0;
    
    visited.add(key);
    let perimeter = dfs(row+1, col, grid, visited);
    perimeter += dfs(row-1, col, grid, visited);
    perimeter += dfs(row, col+1, grid, visited);
    perimeter += dfs(row, col-1, grid, visited);

    return perimeter;
};