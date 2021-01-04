class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        x = None # always the larger string
        y = None
        
        tokens1 = version1.split('.')
        tokens2 = version2.split('.')

        normal = True
        if len(tokens1) > len(tokens2):
            x = tokens1
            y = tokens2
        else:
            x = tokens2
            normal = False
            y = tokens1
        
        n = len(x)
        m = len(y)

        j = 0
        for i in range(n):
            y_val = 0
            if j < m:
                y_val = int(y[j])
            j+=1
            if int(x[i]) > y_val:
                if normal:
                    return 1
                else:
                    return -1
            elif int(x[i]) < y_val:
                if normal:
                    return -1
                else:
                    return 1
        return 0
        

        

s = Solution()
print(s.compareVersion("1.01", "1.001"))
print(s.compareVersion("1.0","1.0.0"))
print(s.compareVersion("0.1","1.1"))
print(s.compareVersion("1.0.1", "1"))
print(s.compareVersion("7.5.2.4", "7.5.3"))
