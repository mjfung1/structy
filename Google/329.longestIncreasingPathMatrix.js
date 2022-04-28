

// 329. Longest Increasing Path in a Matrix


var longestIncreasingPath = function(matrix) {
    
    let max = 0;
    // let memo = {}
    
    // experimental memo. Much faster!!
    let m = matrix.length;
    let n = matrix[0]. length;
    let memo = Array(m).fill().map(() => Array(n));

    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let attempt = findLongestIncreasing(row, col, matrix, -Infinity, memo);
            max = Math.max(max, attempt);
        }
    }

    return max;
};

const findLongestIncreasing = (row, col, grid, prev, memo) => {
    // let key = row + ',' + col + ',' + prev;
    // if (key in memo) return memo[key];
    
    if (row < 0 || row === grid.length || col < 0 || col === grid[0].length) return 0;
    if (grid[row][col] <= prev) return 0;
    
    // experimental memo. Much faster!!!
    if (memo[row][col] !== undefined) return memo[row][col];
    
    
    let current = grid[row][col];
    let steps = [[0,1], [0,-1], [1,0], [-1,0]];
    
    let max = 0;
    for (let step of steps) {
        const [x, y] = step;
        
        let newRow = row + x;
        let newCol = col + y;
        
        let attempt = 1 + findLongestIncreasing(newRow, newCol, grid, current, memo);
        max = Math.max(max, attempt);
    }
    
    // memo[key] = max;
    
    // experimental memo. much faster!!!!
    memo[row][col] = max;
    return max;
};