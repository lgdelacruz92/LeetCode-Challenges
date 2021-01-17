from typing import List

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        '''
        '''
        return self.find(nums, 0, len(a)-1, len(a)-k)
    
    def find(self, a, start, end, target):
        if start < end:
            p = self.partition(a, start, end)
            if p == target:
                return a[p]
            elif p > target:
                return self.find(a, start, p-1, target)
            else:
                return self.find(a, p+1, end,target)
    
    def partition(self, a, start, end):
        pivot = a[end]
        i = start - 1
        for j in range(start, end):
            if a[j] <= pivot:
                i += 1
                self.swap(a, i, j)
        self.swap(a, i+1, end)
        return i+1
    
    def swap(self, a, i, j):
        temp = a[i]
        a[i] = a[j]
        a[j] = temp
    

s = Solution()
a = [3,2,3,1,2,4,5,5,6]
print(s.findKthLargest(a, 4))