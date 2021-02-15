class Solution:
    def solve(self, ribbons, k):
        def ok(i):
            count = 0
            for rib in ribbons:
                if rib >= i:
                    count += rib // i
            return count >= k

        total = sum(ribbons)
        l = 1
        r = total

        ans = 0
        while l <= r:
            mid = l + (r-l)//2

            if ok(mid):
                ans = max(ans, mid)
                l = mid+1
            else:
                r = mid-1
        return ans
        
ribbons = [1,2,3,4,9]
# ribbons=[3]
k = 5   
s = Solution()
print(s.solve(ribbons, k))
