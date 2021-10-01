

var findWords = function(board, words) {
   
    const output = [];
    const set = new Set();
    for (const word of words) {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (board[row][col] === word[0] && wordFinder(word, row, col)) {
                    if (!set.has(word)) {
                        set.add(word);
                        output.push(word)
                    } else {
                        continue;
                    }
                }
            }
        }
    }
    
    function wordFinder(word, row, col) {
        let result = false;
        if (word.length === 0) return true;
        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== word[0]) return;
        
        
        let temp = board[row][col];
        board[row][col] = 1;
        
        if (
            wordFinder(word.slice(1), row+1, col) ||
            wordFinder(word.slice(1), row-1, col) ||
            wordFinder(word.slice(1), row, col+1) ||
            wordFinder(word.slice(1), row, col-1)
           ) result = true;
        
        board[row][col] = temp;
        return result;
        
        
    }
    
    
    
    return output;
};