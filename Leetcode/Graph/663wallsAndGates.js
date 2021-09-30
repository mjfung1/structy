
// DFS - TLE
// time/space: O(mn)^2

const wallsAndGates = (rooms) => {
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] === 0) {
                dfs(row, col, rooms, 0);
            }
        }
    }
};

const dfs = (row, col, grid, distance) => {
    if (row < 0 || row === grid.length || col < 0 || col === grid[0].length) return;
    if (grid[row][col] < distance) return;

    grid[row][col] = distance;

    dfs(row+1, col, grid, distance+1);
    dfs(row-1, col, grid, distance+1);
    dfs(row, col+1, grid, distance+1);
    dfs(row, col-1, grid, distance+1);
};



// BFS
// Count where gates are. and bfs from there to find shortest path
// time/space: O(mn)
const wallsAndGates = (rooms) => {
    let queue = [];
    let visited = {};
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] === 0) {
                queue.push([row, col, 0]);
                let key = row + ',' + col;
                visited[key] = true;
            }
        }
    }

    while (queue.length) {
        let size = queue.length;

        while (size--) {
            const [row, col, distance] = queue.shift();
        
            rooms[row][col] = distance;

            addDistance(row+1, col, rooms, distance + 1, visited, queue);
            addDistance(row-1, col, rooms, distance + 1, visited, queue);
            addDistance(row, col+1, rooms, distance + 1, visited, queue);
            addDistance(row, col-1, rooms, distance + 1, visited, queue);
        }

    }
};

const addDistance = (row, col, grid, distance, visited, queue) => {
    if (row < 0 || row === grid.length || col < 0 || col === grid[0].length) return;
    if (grid[row][col] === -1) return;
    let key = row + ',' + col;
    if (key in visited) return;

    visited[key] = true;
    queue.push([row, col, distance]);
    
};