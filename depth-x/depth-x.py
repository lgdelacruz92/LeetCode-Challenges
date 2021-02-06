class Solution:
    def solve(self, s):
        stack = []             

        i = 0
        answer = []
        depth = 0
        while i < len(s):
            if s[i] == ')':
                count = 0
                while stack[len(stack)-1] != '(':
                    count += 1
                    stack.pop()
                stack.pop()
                depth -= 1
                answer[depth] += count
                
            elif s[i] == '(':
                depth += 1
                stack.append(s[i])
                if depth > len(answer):
                    answer.append(0)
            else:
                stack.append(s[i])
            i += 1
        
        return answer
           
s = Solution()
print(s.solve('(()())'))
print(s.solve('(xx(xx(x))x)'))