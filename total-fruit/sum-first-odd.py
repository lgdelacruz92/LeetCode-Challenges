class Solution:
    def solve(self, n):
        acc = 0
        j = 0
        for i in range(0, 1001):
            if i % 2 == 1:
                j += 1
                acc += i
            if j == n:
                break
        return acc
s = Solution()
print(s.solve(516))