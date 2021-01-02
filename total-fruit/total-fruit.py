from typing import List
import math

class Solution:
    def totalFruit(self, tree: List[int]) -> int:
        if len(tree) <=2:
            return len(tree)
        else:
            i = 0
            j = 1
            types = set()
            types.add(tree[i])
            types.add(tree[j])
            n = len(tree)
            m = -math.inf
            while j < n and len(types) < 3:
                m = max(m, j-i)
                types.add(tree[j])
                if len(types) == 3:
                    k = j 
                    types_to_keep = set()
                    while len(types_to_keep) < 2:
                        types_to_keep.add(tree[k]) 
                        k-=1
                    for x in range(i, k+1):
                        if tree[x] in types:
                            types.remove(tree[x])
                    i = k+1
                j+=1
            m = max(m, j-i)
            return m 


s = Solution()
# t1 = [3,3,3,1,2,1,1,2,3,3,4]
# r = s.totalFruit(t1)
# print(r)

t2 = [0,1,6,6,4,4,6]
r = s.totalFruit(t2)
print(r)