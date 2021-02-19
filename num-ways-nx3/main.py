import functools

class Solution:
    def numOfWays(self, n):
        '''
        0 -> R
        1 -> Y
        2 -> G
        '''
        if n == 1:
            return 12
        self.nodes = [
            (0,1,0),
            (1,0,1),
            (2,0,1),
            (0,1,2),
            (1,0,2),
            (2,0,2),
            (0,2,0),
            (1,2,0),
            (2,1,0),
            (0,2,1),
            (1,2,1),
            (2,1,2)
        ]

        y = len(self.nodes)
        # build graph
        self.graph = {}
        for i in range(y):
            for j in range(y):
                if i != j:
                    if self.paint_ok(self.nodes[i], self.nodes[j]):
                        if i in self.graph:
                            self.graph[i].append(j)
                        else:
                            self.graph[i] = [j]
        count = 0
        self.mod = 1000000007
        self.memo = {}
        for i in range(y):
            count += self.dfs(i,n)
            count %= self.mod
        return count
    @functools.lru_cache(None)
    def dfs(self, i, n):
        if n == 1:
            return 1
        if (i, n) in self.memo:
            return self.memo[(i,n)]
        count = 0
        for next_node in self.graph[i]:
            count += self.dfs(next_node, n-1)
            count %= self.mod
        self.memo[(i,n)] = count
        return count

    def paint_ok(self, a, b):
        return a[0] != b[0] and a[1] != b[1] and a[2] != b[2]

s = Solution()
print(s.numOfWays(2))
print(s.numOfWays(3))
print(s.numOfWays(7))
print(s.numOfWays(5000))