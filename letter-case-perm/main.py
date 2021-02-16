from typing import List
class Solution:
    def letterCasePermutation(self, S: str) -> List[str]:
        self.n = len(S) 
        self.S = [x for x in S]
        self.alphabet = set([x for x in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'])
        self.answers = []
        self.dfs(0, '')
        return self.answers

    def dfs(self, i, current_str):
        if i == self.n:
            self.answers.append(current_str)
            return
        
        if self.S[i] in self.alphabet:
            current_str += self.S[i].upper()
            self.dfs(i+1, current_str)
            current_str = current_str[:len(current_str)-1]
            current_str += self.S[i].lower()
            self.dfs(i+1, current_str)
        else:
            current_str += self.S[i]
            self.dfs(i+1, current_str)

    

a = "3z4"
b = "a1b2"
c = "12345"
d = "0"
s = Solution()
print(s.letterCasePermutation(a))
print(s.letterCasePermutation(b))
print(s.letterCasePermutation(c))
print(s.letterCasePermutation(d))