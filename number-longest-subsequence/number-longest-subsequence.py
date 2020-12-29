from typing import List
def ls(A: List[int]):
    n = len(A)
    def dfs(i: int, cur: List[int]):
        if i >= n-1:
            print(cur)
            return
        for j in range(i, n):
            if len(cur) == 0 or A[j] > cur[-1]:
                cur.append(A[j])
                dfs(i+1, cur)
                cur.pop()
        
    dfs(0, [])

ls([1,3,5,4,7])