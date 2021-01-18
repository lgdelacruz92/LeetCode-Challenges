



def optimal_path(grid):
    n = len(grid)
    record = []
    for i in range(n):
        row = []
        for j in range(n):
            row.append(-1)
        record.append(row)
    record[0][0] = grid[0][0]
    def sum_path(i,j):
        if record[i][j] != -1:
            return record[i][j]
        if i < 0 or i >= n or j < 0 or j >= n:
            return 0

        val = max(sum_path(i,j-1), sum_path(i-1,j)) + grid[i][j]
        record[i][j] = val
        return val
        
    return sum_path(n-1,n-1)

def path_solve_dp(grid):
    n = len(grid)
    dp = []
    for i in range(n):
        row = []
        for j in range(n):
            row.append(-1)
        dp.append(row)
    
    dp[0][0] = grid[0][0]
    for i in range(n):
        for j in range(n):
            if i-1 < 0 or i >= n:
                if j - 1 >= 0:
                    dp[i][j] = dp[i][j-1] + grid[i][j]
                continue
            if j-1 < 0 or j >= n:
                if i-1 >= 0:
                    dp[i][j] = dp[i-1][j] + grid[i][j]
                continue
            dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    return dp[n-1][n-1]





grid = [
    [3,7,9,2,7],
    [9,8,3,5,5],
    [1,7,9,8,5],
    [3,8,6,4,10],
    [6,3,9,7,8]
]

import time
start = time.time()
print(path_solve_dp(grid))
print(time.time() - start)