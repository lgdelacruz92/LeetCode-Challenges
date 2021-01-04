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
                    last_item_added = None
                    while k >= 0 and len(types_to_keep) <= 2:
                        types_to_keep.add(tree[k])
                        if len(types_to_keep) == 3:
                            last_item_added = tree[k] 
                            break
                        k -= 1
                    types_to_keep.remove(last_item_added)
                    types = types_to_keep
                    i = k + 1
                j+=1
            m = max(m, j-i)
            return m

s = Solution()
# t1 = [3,3,3,1,2,1,1,2,3,3,4]
# r = s.totalFruit(t1)
# print(r)

t2 = [1,9,1,8,22,0,22,19,19,2,19,6,6,19,2,20,2,9,9,9,9,16,19,16,19,11,19,0,19,19] 
r = s.totalFruit(t2)
print(r)