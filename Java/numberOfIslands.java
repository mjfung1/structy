package Java;

// 200. Number of Islands

class numberOfIslands {
    public int main(char[][] grid) {
        int amount = 0;

        for (int row = 0; row < grid.length; row++) {
            for (int col = 0; col < grid[0].length; col++) {
                if (grid[row][col] == '1') {
                    amount++;
                    dfs(grid, row, col);
                }
            }
        }

        return amount;
    }

    public void dfs(char[][] grid, int row, int col) {
        if (row < 0 || row == grid.length || col < 0 || col == grid[0].length)
            return;
        if (grid[row][col] == '0')
            return;

        // if above cases dont hit we have a '1';
        grid[row][col] = '0';

        dfs(grid, row + 1, col);
        dfs(grid, row - 1, col);
        dfs(grid, row, col + 1);
        dfs(grid, row, col - 1);
    }
}