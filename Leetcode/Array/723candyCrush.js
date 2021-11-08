
// iterative

function candyCrush(board) {
    // Write your code here
    let crushable = true;

    while (crushable) {
        crushable = false;

        // mark rows
        for (let row = 0; row < board.length - 2; row++) {
            for (let col = 0; col < board[0].length; col++) {
                let num = Math.abs(board[row][col]);
                if (num === 0) continue;
                if (Math.abs(board[row+1][col]) === num && Math.abs(board[row+2][col]) === num) {
                    crushable = true;
                    board[row][col] = board[row+1][col] = board[row+2][col] = -num;
                }
            }
        }

        // mark cols
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length - 2; col++) {
                let num = Math.abs(board[row][col]);
                if (num === 0) continue;
                if (Math.abs(board[row][col+1]) === num && Math.abs(board[row][col+2]) === num) {
                    crushable = true;
                    board[row][col] = board[row][col+1] = board[row][col+2] = -num;
                }
            }
        }

        for (let col = 0; col < board[0].length; col++) {
            let index = board.length - 1;
            for (let row = board.length - 1; row >= 0; row--) {
                if (board[row][col] > 0) {
                    board[index--][col] = board[row][col];
                }
            }

            for (let row = index; row >= 0; row--) {
                board[row][col] = 0;
            }
        }

    }


    return board;
  }