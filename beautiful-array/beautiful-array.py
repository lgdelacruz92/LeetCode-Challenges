from typing import List

class Solution:
    def beautifulArray(self, N: int) -> List[int]:
        result = []
        a = [i for i in range(1, N+1)]

        def swap(i: int, j: int, a: List[int]):
            temp = a[i]
            a[i] = a[j]
            a[j] = temp
            return a

        def permute(l: int, r: int, a: List[int]):
            if l == r:
                result.append(a.copy())
                return
            
            for i in range(l, r+1):
                swap(l, i, a)
                permute(l+1, r, a)
                swap(l, i, a)

        permute(0, N-1, a)

        def check(items: List[int]):
            n = len(items)
            for i in range(n):
                for j in range(i+1, n):
                    for k in range(i+1, j-1):
                        if 2 * items[k] == items[i] + items[j]:
                            return False
            return True
    
        count = 0
        for item in result:
            
            if check(item):
                print(item)
                count+=1
        print('count: {count}'.format(count=count))


s = Solution()
s.beautifulArray(5)
