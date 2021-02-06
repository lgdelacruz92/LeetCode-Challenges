class Solution:
    def solve(self, nums):
        record = set()
        answer = 0
        for i in range(len(nums)):
            for j in range(i,len(nums)):
                record.add(nums[j])
                if max(record) - min(record) == j - i:
                    answer = max(answer, j-i+1)
            record.remove(nums[i])
        return answer

s = Solution()
print(s.solve([2,4,5,0]))