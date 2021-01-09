class Solution:
    def solve(self, n):
        b = bin(n)[2:]

        i = 0
        j = 0
        n = len(b)
        m = 0
        while i < n:
            i = j
            while j < n and b[j] == '1':
                j+=1
            m = max(m, j-i)
            j += 1
        return m

s = Solution()
print(s.)