class Solution:
    def countVowelStrings(self, n: int) -> int:
        dp = [0] * (n+1)
        dp[1] = 5
        for i in range(2,len(dp)):
            limit = dp[i-1] 
            
            j = 5
            while limit > 0:
               for k in range(j, 0, -1):
                   dp[i] += k
               limit -= j
               j -= 1
        return dp[n]

s = Solution()
print(s.countVowelStrings(4))