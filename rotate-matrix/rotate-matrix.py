class Solution:
    def solve(self, matrix):
        def swap(a, b):
            temp = matrix[a[0]][a[1]]
            matrix[a[0]][a[1]] = matrix[b[0]][b[1]]
            matrix[b[0]][b[1]] = temp
    
        if len(matrix) == 1:
            return matrix
        
        n = len(matrix)
        for i in range(int(n/2)+1):
            for j in range(i, n-1):
                swap((i,j), (j,n-1-i))
                swap((j,n-1-i),(n-1-i,n-1-j))
                swap((n-1-i,n-1-j), (n-1-j,i))
        return matrix

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for row in matrix:
    print(row)

print('---------')

s = Solution()
s.solve(matrix)

for row in matrix:
    print(row)