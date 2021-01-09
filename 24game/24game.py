from typing import List
class Solution:
    def judgePoint24(self, nums):
        # tree search / comb:perm      
        def f(nums): # return all possibile comb
            res = set()
            n = len(nums)

            if n == 1:
                return set(nums)

            for i in range(1, n//2+1): # run over all comb (i, n-i)
                # produce all index combination
                S = [j for j in range(i)]

                p = i # the init state 0,1,2... is ready to go
                while p >= 0: # key condition!
                    if p == i:
                        T = [j for j in range(n) if j not in S]
                        A, B = f([nums[j] for j in S]), f([nums[j] for j in T])
                        for x in A:
                            for y in B:
                                res.update([x+y, x*y, x-y, y-x, x and y/float(x), y and x/float(y)])            
                        p -= 1

                    if 0 <= S[p] < n-1:
                        S[p] += 1
                        p += 1
                    elif S[p] < 0:
                        S[p] = S[p-1]
                    else:
                        S[p] = -1
                        p -= 1        

            return res

        A = f(nums)
        return 24 in A or 23.99999999999999 in A

s= Solution()
print(s.judgePoint24([4,1,8,7]))