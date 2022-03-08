

// Say that you are a traveler on a 2D grid. You begin in the 
// top-left corner and your goal is to travel to the bottom-right
// corner. You may only move down or right.

// In how many ways can you travel to the goal on a grid with 
// dimensions m * n?

// Write a function 'gridTraveler(m,n)' that calculates this.


















// time: O(mn)
// space: O(mn)
const gridTraveler = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;

    for (let row = 0; row <= m; row++) {
        for (let col = 0; col <= n; col++) {
            // move right;
            if (col + 1 <= n) {
                table[row][col+1] += table[row][col];
            }

            // move down;
            if (row + 1 <= m) {
                table[row+1][col] += table[row][col];
            }
        }
    }

    return table[m][n];
};


console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220