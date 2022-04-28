

// 2128. Remove All Ones With Row and Column Flips
// reasoning
// if find a column that has 1, flip whole column.
// after this operation
// all rows must be either 1s or 0s.
// if not, not possible to remove all 1s.
var removeOnes = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // console.log(grid)
    // if column has 1 flip
    for (let col = 0; col < n; col++) {
        if (grid[0][col] === 1) {
            // flip column
            for (let row = 0; row < m; row++) {
                grid[row][col] = 1 - grid[row][col];
            }
        }    
    }
    // console.log(grid)
    // after flip. check all rows are same
    for (let row = 0; row < m; row++) {
        let sum = 0;
        for (let col = 0; col < n; col++) {
            sum += grid[row][col];
        }
        
        if (sum !== 0 && sum !== n) return false;
    }
    
    return true;
};