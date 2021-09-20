
# 79. Word Search


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:

        def dfs(row: int, col: int, board: List[List[str]], word: str, index: int) -> bool:
            if row < 0 or row == len(board) or col < 0 or col == len(board[0]):
                return False
            if board[row][col] != word[index]:
                return False
            if index == len(word) - 1:
                return True

            temp = board[row][col]
            board[row][col] = '!'

            found = dfs(row+1, col, board, word, index + 1) or dfs(row-1, col, board, word, index +
                                                                   1) or dfs(row, col+1, board, word, index + 1) or dfs(row, col-1, board, word, index + 1)

            board[row][col] = temp

            return found

        for row in range(len(board)):
            for col in range(len(board[0])):
                if dfs(row, col, board, word, 0) == True:
                    return True

        return False
