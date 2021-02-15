from typing import List

class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        if len(jobDifficulty) < d:
            return -1
        M = sum(jobDifficulty)
        n = len(jobDifficulty)
        seen = {}
        def dfs(day, i):
            if (day, i) in seen:
                return seen[(day, i)]
            if not jobDifficulty[i:]:
                return 1000000
            if day == 1:
                seen[(day, i)] = max(jobDifficulty[i:])
                return max(jobDifficulty[i:])
            
            m = 10000000
            for x in range(1, n):
                left = max(jobDifficulty[i:i+x])
                right = dfs(day-1, x+i)
                m = min(m, left+right)
            seen[(day, i)] = m
            return m
        return dfs(d, 0)
jobDifficulty = [11,111,22,222,33,333,44,444]
d = 6
# jobDifficulty = [6,5,4,3,2,1] 
# d = 2

s = Solution()
print(s.minDifficulty(jobDifficulty, d))