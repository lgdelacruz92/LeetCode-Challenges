from typing import List
class Solution:
    def maxArea(self, height: List[int]) -> int:
        i = 0
        j = len(height)-1

        m = 0
        while i < j:
            m = max(m, (j-i) * min(height[i], height[j]))
            if height[i] < height[j]:
                i+=1
            elif height[i] > height[j]:
                j-=1
            else:
                i+=1
                j-=1
        return m

# height = [1,8,6,2,5,4,8,3,7]
# height = [1,1]
# height = [4,3,2,1,4]
height = [1,2,1]
s = Solution()
r = s.maxArea(height)
print(r)