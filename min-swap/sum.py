class Solution:
    def solve(self, reviews, threshold):
        p = 0 
        f = 0
        for fi, pi in reviews:
            p+= pi
            f += fi
        count = 0
        while (f/p) < (threshold/100):
            f += 1
            p += 1
            count +=1 
        return count

reviews = [
    [4, 4],
    [1, 2],
    [3, 6]
]
t = 77
s = Solution()
print(s.solve(reviews, t))
