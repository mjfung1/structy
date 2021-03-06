
// Say that you are a traveler on a 2D grid.  You begin in the
// top-left corner and your goal is to travel to the bottom-right
// corner. You may only move down or right.

// In how many ways can you travel to the goal on a grid with
// dimension m * n?

// Write a function 'gridTraveler(m, n)' that calculates this.


// 2nd review. 02-28-2022
const gridTraveler2 = (m, n, memo = {}) => {
    let key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m < 1 || n < 1) return 0;

    let down = gridTraveler2(m - 1, n, memo);
    let right = gridTraveler2(m, n - 1, memo);

    memo[key] = down + right;
    return memo[key];
};


console.log(gridTraveler2(1,1)) // 1
console.log(gridTraveler2(2,1)) // 1
console.log(gridTraveler2(2,3)) // 3
console.log(gridTraveler2(3,3)) // 6
console.log(gridTraveler2(20,20)) // 















// time: O(2^n+m); brute force
// time: O(n * m); memoized
// space: O(n+m);
function gridTraveler(row, col, memo={}) {
    let key = row + ',' + col;
    if (key in memo) return memo[key];
    if (row === 1 && col === 1) return 1;
    if (row === 0 || col === 0) return 0;

    let rightMove = gridTraveler(row, col - 1, memo);
    let downMove = gridTraveler(row - 1, col, memo);

    memo[key] = rightMove + downMove
    return memo[key];
}


// console.log(gridTraveler(1,1)) // 1
// console.log(gridTraveler(2,1)) // 1
// console.log(gridTraveler(2,3)) // 
// console.log(gridTraveler(20,20)) // 