class Solution:
    def minDistance(self, houses, k):
        # assume k = 1
        self.total = sum(houses)
        self.n_houses = []
        self.n = len(houses)
        for i, h in enumerate(houses):
            if i != n-1:
                self.n_houses.append(h)
                self.n_houses.append(0)
            else:
                self.n_houses.append(h)
    
    def dfs(self, i, k):

        
        for x in range(i+1, self.n):
            
                


houses = [1,4,8,10,20]
k = 3

s = Solution()
s.minDistance(houses, k)
