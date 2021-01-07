class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        total = 0
        c = 0
        multiplier2 = 1
        n = len(num2)
        m = len(num1)
        for i in range(n-1, -1, -1):
            multiplier = 1
            running_sum = 0
            c = 0
            cary_move = 0
            for j in range(m-1,-1,-1):
                d1 = int(num2[i])
                d2 = int(num1[j])
                digit_sum = d1 * d2 + c
                c = int(digit_sum / 10)
                digit_sum = digit_sum % 10
                digit_sum *= multiplier
                multiplier *= 10
                running_sum += digit_sum
                cary_move += 1
            total += running_sum * multiplier2
            multiplier2 *= 10
            total += c * pow(10, cary_move)
        return '{total}'.format(total=total)

s = Solution()
print(s.multiply("98","9"))