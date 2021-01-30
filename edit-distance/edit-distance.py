import math

class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        return self.distance(word1, word2,len(word1)-1,len(word2)-1,{})
    
    def distance(self, s: str,t: str, i: int, j: int, record: set):
        if (i,j) in record:
            return record[(i,j)]
        if i == 0:
            record[(i,j)]= j+1
            return j+ 1
        elif j == 0:
            record[(i,j)] = i+1
            return i + 1
        else:
            if s[i] == t[j]:
                result = self.distance(s,t,i-1,j-1,record)
                record[(i,j)] = result
                return result
            else:
                result = min(
                    self.distance(s,t,i-1,j,record),
                    self.distance(s,t,i,j-1,record),
                    self.distance(s,t,i-1,j-1,record)) + 1
                record[(i,j)] = result
                return result

s = Solution()
a = 'intention'
b = 'execution'
print(s.minDistance(a, b))