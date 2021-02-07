class Solution:
    def solve(self, matrix):
        n = len(matrix)
        m = len(matrix[0])
        max_area = 0
        for i in range(n):
            for j in range(m):
                if matrix[i][j] == 1:
                    max_area = max(max_area, self.dfs(matrix, i, j))
                    
        return max_area
    def dfs(self, matrix, i, j):
        directions = [[-1,0],[0,-1],[1,0],[0,1]]

        matrix[i][j] = -1
        total = 0

        n = len(matrix)
        m = len(matrix[0])
        for direction in directions:
            x = j +direction[1]
            y = i + direction[0]
            if 0 <= y and y < n and 0<=x and x < m and matrix[y][x] == 1:
                total += self.dfs(matrix,y,x)
                    
        return 1 + total

matrix = [
    [0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0]
] 
s = Solution()
print(s.solve(matrix))