class Solution:
    def solve(self, contacts):                
        seen = set()
        count = 0
        for contact_list in contacts:
            dont_count = False
            for contact in contact_list:
                if contact in seen:
                    dont_count = True
                    break

            if dont_count == False:
                count+=1
            seen |= set(contact_list)
        return count

contacts = [
    ["elon@tesla.com", "elon@paypal.com"],
    ["elon@tesla.com", "elon@spacex.com"],
    ["tim@apple.com"]
]

s = Solution()
print(s.solve(contacts))