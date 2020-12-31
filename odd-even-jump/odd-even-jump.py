from typing import List

def solution(A: List[int]) -> int:
    n = len(A)
    next_higher = [0] * n

    stack = []
    for a,i in sorted([a, i] for i, a in enumerate(A)):
        while stack and stack[-1] < i:
            next_higher[stack.pop()] = i
        stack.append(i)
    
    

if __name__ == "__main__":
    solution([10,13,12,14,15])