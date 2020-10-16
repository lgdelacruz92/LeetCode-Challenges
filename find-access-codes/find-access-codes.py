import random
def solution(l):
    if len(l) < 3:
        return 0

    seen = [0 for _ in range(len(l))]
    
    n = len(l)
    count = 0
    for k in range(n):
        for j in range(k):
            # find j
            if l[k] % l[j] == 0:
                seen[k] += 1
                count += seen[j]
    return count
    
a = solution([1,2,3,4,5,6])
print(a)
a = solution([1, 1, 1])
print(a)
a = solution([1,1,1,1,1])
print(a)
a = solution([])
print(a)
a = solution([1,2,3])
print(a)