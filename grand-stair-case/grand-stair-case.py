import time
def solution(n):
    dp = [list() for _ in range(n+1)]
    dp[3] = [[2,1]]
    m = len(dp)
    for i in range(4, m):
        stairs = dp[i-1]
        for stair in stairs:
            for j in range(len(stair)):
                stair[j] += 1
                if valid(stair):
                    dp[i].append(stair[:])
                stair[j] -= 1
            stair_cp = stair[:]
            stair_cp.append(1)
            if valid(stair_cp):
                dp[i].append(stair_cp)
    return len(dp[len(dp)-1])

def valid(stair):
    '''
        len(stair) >= 3 && len(stair) <= 200
    ''' 
    for i in range(1, len(stair)):
        if stair[i] >= stair[i-1]:
            return False
    return True

start_time = time.time()
for i in range(3, 18):
    print(solution(i))
print(time.time() - start_time)
