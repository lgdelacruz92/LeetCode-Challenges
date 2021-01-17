import math
def solve(x, vals):
    if x <= 0:
        return 0
    
    minimum = math.inf
    for val in vals:
        minimum = min(solve(x - val, vals) + 1,minimum)
    
    return minimum

coins = [1,2,5]
money = 12

print(solve(money, coins))