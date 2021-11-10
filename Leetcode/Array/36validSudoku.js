
// 36. Valid Sudoku


var isValidSudoku = function(board) {
    let rows = Array(9).fill().map(() => new Set());
    let cols = Array(9).fill().map(() => new Set());
    let box = Array(9).fill().map(() => new Set());
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            let char = board[row][col];
            if (char === '.') continue;
            
            if (rows[row].has(char)) return false;
            rows[row].add(char);
            
            if (cols[col].has(char)) return false;
            cols[col].add(char);
            
            let idx = ~~(row/3) * 3 + ~~(col/3);
            if (box[idx].has(char)) return false;
            box[idx].add(char);
            
        }
    }
    return true;
};