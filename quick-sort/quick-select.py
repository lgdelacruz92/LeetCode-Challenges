class Solution:
    def solve(self, nums, k):
        return self.quickselect(nums,0,len(nums)-1,k)
    
    def quickselect(self,nums,p,r,k):
        q = self.partition(nums,p,r)
        if q == k: 
            return nums[q]
        elif q < k:
            return self.quickselect(nums,q+1,r,k)
        else:
            return self.quickselect(nums,p,q-1,k)

    def partition(self,nums,p,r):
        x = nums[r]
        i = p-1
        for j in range(p,r):
            if nums[j] <= x:
                i+=1
                self.swap(nums,i,j)
        self.swap(nums,i+1,r)
        return i+1

    def swap(self, nums, i, j):
        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp

s = Solution()
# a = [5, 3, 8, 2, 0]
a = [4,3,2,1]
print(s.solve(a,1))
