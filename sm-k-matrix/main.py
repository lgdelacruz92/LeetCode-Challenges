from typing import List
from queue import PriorityQueue
class Solution:
    def kthSmallest(self, mat: List[List[int]], k: int) -> int:
        pq = PriorityQueue()
        pq.put(0)
        for row in mat:
            next_pq = PriorityQueue()
            while not pq.empty():
                next_item = pq.get()
                for j in row:
                    val = next_item + j
                    next_pq.put(val)
                    if next_pq.qsize() > k:
                        next_pq.get()
            pq = next_pq
        return pq.get()



# mat = [[1,3,11],[2,4,6]]
# k = 5
# mat = [[1,3,11],[2,4,6]]

# k = 9
mat = [[1,10,10],[1,4,5],[2,3,6]]
k = 7
s = Solution()
print(s.kthSmallest(mat, k))