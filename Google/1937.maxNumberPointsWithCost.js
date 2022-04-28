

// 1937. Maximum Number of Points with Cost
// TLE with top-down memo apprach.
var maxPoints = function(points) {
    let row = 0;
    let m = points.length;
    let n = points[0].length;
    let visited = {};
    
    let max = 0;
    console.log(points.length, points[0].length)
    for (let col = 0; col < n; col++) {
        let point = points[row][col];
        
        let attempt = findMaxPoints(points, row, col, visited);
        max = Math.max(max, attempt);
    }
    
    return max;
};

const findMaxPoints = (grid, row, col, visited) => {
    if (row === grid.length - 1) return grid[row][col];
    let key = row + ',' + col;
    if (key in visited) return visited[key];
    
    let max = 0;
    let currentNum = grid[row][col]
    
    for (let newCol = 0; newCol < grid[0].length; newCol++) {
        let distanceFromColToNewCol = Math.abs(newCol - col);
        let attempt = currentNum - distanceFromColToNewCol + findMaxPoints(grid, row + 1, newCol, visited);
        max = Math.max(max, attempt);
        
    }
    
    visited[key] = max;
    return max;
}