import random
def solution(xs):
    if len(xs) == 1:
        return str(xs[0])
    allZeros = True
    for item in xs:
        if item != 0:
            allZeros = False
            break
    if allZeros:
        return '0'

    countNegs = 0
    countZero = 0
    for item in xs:
        if item < 0:
            countNegs += 1
        if item == 0:
            countZero += 1
    if countNegs % 2 == 0:
        product = 1
        for item in xs:
            if item != 0:
                product *= item
        return '{product}'.format(product=product)
    else:
        if countNegs == 1 and countZero > 0 and countZero + countNegs == len(xs):
            return '0'
        maximum = -99999999999999
        index = -1
        for i in range(len(xs)):
            if maximum < xs[i] and xs[i] < 0:
                maximum = xs[i]
                index = i
        if index != -1:
            product = 1
            for i in range(len(xs)):
                if i != index and xs[i] != 0:
                    product *= xs[i]
            return '{product}'.format(product=product)
        else:
            return '0'



aa = solution([-2,-3,4,-5])
print(aa, type(aa)) #60
ab = solution([-2,-3,-4,-5])
print(ab, type(ab)) #120
ac = solution([2,0,2,2,0])
print(ac, type(ac)) #8
ad = solution([0,0,2,2,0])
print(ad, type(ad)) #4
ae = solution([0,0])
print(ae, type(ae)) #0
af = solution([0,0,-2,0])
print(af, type(af)) #0
ag = solution([0,0,0,-1])
print(ag, type(ag)) #0
ah = solution([-20,0,0,-1])
print(ah, type(ah)) #20
ai = solution([-20,0,0,0])
print(ai, type(ai)) #0
aj = solution([0,0,-2,-2,0])
print(aj, type(aj)) #4
ak = solution([0,1])
print(ak, type(ak)) #1
al = solution([])
print(al, type(al)) #0
am = solution([-2,-3,0,-2,0])
print(am, type(am)) #6
an = solution([-3,-3,-3,0])
print(an, type(an)) #9
ao = solution([-3,-3,-3,3, 0])
print(ao, type(ao)) #27
ap = solution([-1,-2,-3,3, 0])
print(ap, type(ap)) #18
aq = solution([-1])
print(aq, type(aq)) #9

# a = [random.randint(-1000, 1000) for x in range(50)]
# print(solution(a))
# b = [1000 for x in range(50)]
# print(solution(b))