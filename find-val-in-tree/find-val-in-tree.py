class Solution:
    def solve(self, root, target):
        q = [root]
        while len(q) > 0:
            next_item = q[0]
            if next_item.val == target:
                return True
            else:
                if root.left != None:
                    q.append(root.left)
                
                if root.right != None:
                    q.append(root.right)
                del q[0]
        return False
    

class Tree:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

left = Tree(2, Tree(4))
right = Tree(3, Tree(6), Tree(7))
root = Tree(1, left, right)

s = Solution()
s.solve(root, 6)