import math
graph = [
    [0,4,6,0,0,0],
    [4,0,6,3,4,0],
    [6,6,0,1,0,0],
    [0,3,1,0,2,3],
    [0,4,0,2,0,7],
    [0,0,0,3,7,0]
]

inf = math.inf
d = [inf] * 6
m = [False] * 6
p = [-1] * 6

current = 0
while True:
    m[current] = True
    for i, v in enumerate(graph[current]):
        if i != current and graph[current][i] != 0:
            d[i] = min(d[i], graph[current][i])
    
    minimum = inf
    minimum_index = current
    for i, v in enumerate(d)
        if m[i] == False and v < minimum:
            minimum_index = i
            minimum = v

    p[minimum_index] = current
    current=minimum_index
    if all(m):
        break
            
print('HERE')
    