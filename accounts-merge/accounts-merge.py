from typing import List
from pprint import PrettyPrinter

pp = PrettyPrinter()

class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        graph = []
        n = len(accounts)
        for i in range(n):
            row = []
            for j in range(n):
                row.append(0)
            graph.append(row)

        email_sets = [set(account[1:]) for account in accounts]

        for i, email in enumerate(email_sets):
            email_list = list(email)
            for individual_email in email_list:
                for j, email2 in enumerate(email_sets):
                    if individual_email in email2:
                        graph[i][j] = 1
                        graph[j][i] = 1
        
        seen = set()
        def dfs(index, acc):
            acc.append(accounts[index])
            seen.add(index)
            for i, col in enumerate(graph[index]):
                if col == 1 and i not in seen:
                    dfs(i, acc) 
            return acc

        answer = []
        for i in range(n):
            if i not in seen:
                accumulate = []
                acc = dfs(i, accumulate)
                new_emails = []
                for item in acc:
                    emails = item[1:]
                    new_emails += emails
                answer.append([acc[0][0]] + list(set(new_emails)))
        return answer

# accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
# accounts = [["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]
accounts = [["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]]
s = Solution()
r = s.accountsMerge(accounts)
pp.pprint(r)