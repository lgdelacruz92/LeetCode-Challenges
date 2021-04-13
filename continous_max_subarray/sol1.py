from queue import PriorityQueue


def count_subarrays(arr):
    n = len(arr)
    result = [1] * n
    stack = []
    for i, v in enumerate(arr):
        if not stack:
            result[i] += i
        else:
            while stack and stack[-1][0] < v:
                stack.pop()
            if stack:
                result[i] += i - stack[-1][1]-1
            else:
                result[i] += i
        stack.append((v, i))
    arr.reverse()
    result.reverse()
    stack = []
    for i, v in enumerate(arr):
        if not stack:
            result[i] += i
        else:
            while stack and stack[-1][0] < v:
                stack.pop()
            if stack:
                result[i] += i - stack[-1][1]-1
            else:
                result[i] += i
        stack.append((v, i))
    result.reverse()
    return result

if __name__ == '__main__':
    count_subarrays([3, 4, 1, 6, 2])
