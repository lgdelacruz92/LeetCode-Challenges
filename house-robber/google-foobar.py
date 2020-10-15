def solution(x, y):
    a = None
    b = None
    if len(y) > len(x):
        a = x
        b = y
    else:
        a = y
        b = x
    # Your code here
    while len(a) > 0:
        val = a[0]
        if val in b:
            index = b.index(val)
            del b[index]
            del a[0]
    return b[0]

print(solution([1,2,3], [1,2,3,4]))
print(solution([13, 5, 6, 2, 5], [5, 2, 5, 13]))