from typing import List 
class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        start = 0
        missing_terms = []
        for num in arr:
            if num - start > 0:
                for i in range(start+1, num):
                    missing_terms.append(i)
            start = num
        
        if k > len(missing_terms):
            m = max(arr)
            i = 1
            while k > len(missing_terms):
                missing_terms.append(m + i)
                i += 1
            return missing_terms[len(missing_terms)-1]
        else:
            return missing_terms[k-1]

s = Solution()
print(s.findKthPositive([1,2,3,4], 2))