

// 1293. Shortest Path in a Grid with Obstacles Elimination
// hard.
// bfs while keeping track of visited key;

var shortestPath = function(grid, k) {
    let m = grid.length - 1;
    let n = grid[0].length - 1;
    
    const queue = [ [ 0, 0, k, 0] ];
    const seen = new Set();
    let key = `0,0,${k}`;
    seen.add(key)
    
    
    while (queue.length) {
        let [ row, col, stepsLeft, steps ] = queue.shift();
        
        if (row === m && col === n) return steps;
        
        const deltas = [ [0, 1], [0, -1], [1, 0], [-1, 0]];
        
        for (let delta of deltas) {
            let [r, c] = delta;
            let newRow = row + r;
            let newCol = col + c;
            
            if (isValid(newRow, newCol, grid)) {
                let stepsRemaining = stepsLeft - grid[newRow][newCol];
                let key = `${newRow},${newCol},${stepsRemaining}`;
                if (stepsRemaining >= 0 && !seen.has(key)) {
                    seen.add(key);
                    queue.push([ newRow, newCol, stepsRemaining, steps + 1 ]);
                } 
            }
            
        }
    }
    
    return -1;
};

const isValid = (row, col, grid) => {
    let rowInbounds = row >= 0 && row < grid.length;
    let colInbounds = col >= 0 && col < grid[0].length;
    
    return rowInbounds && colInbounds;
}