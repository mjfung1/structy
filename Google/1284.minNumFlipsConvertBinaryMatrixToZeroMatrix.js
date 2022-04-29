

// 1284. Minimum Number of Flips to Convert Binary Matrix to Zero Matrix
// bfs. create copy of array then flip itself and neighbor numbers;


var minFlips = function(mat) {
    
    let m = mat.length;
    let n = mat[0].length;
    
    const queue = [ [ mat, 0 ] ]; 
    let visited = new Set();
    
    
    while (queue.length) {
        
        let [ grid, steps ] = queue.shift();
            
        let sum = 0;
        for (let sub of grid) {
            sum += sub.reduce((a,b) => a + b);
        }
        
        if (sum === 0) return steps;
        
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let newGrid = flipGrid(grid, i , j);
                
                // create flatten bc arrays are passed by ref
                let flatten = newGrid.flat(2).join(',');
                
                if (visited.has(flatten)) continue;
                
                queue.push([newGrid, steps + 1]);
                visited.add(flatten);
            }
        }
    }
    
    return -1;
};