class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solution(h, q):
    ions = [i for i in range(1, pow(2, h))]
    def post_order_array(ions, i, j):
        if i == j-1:
            return Node(ions[i])
        root = Node(ions[j-1])
        mid = int(((j-1) - i)/2) + i
        root.right = post_order_array(ions, mid, j-1)
        root.left = post_order_array(ions, i, mid)
        return root

    def preorder(root, order):
        if root:
            q = [root]
            while len(q) > 0:
                f = q[0]
                order.append(f.val)
                if f.left:
                    q.append(f.left)
                if f.right:
                    q.append(f.right)
                del q[0]
    po = post_order_array(ions, 0, len(ions))
    pro = []
    preorder(po, pro)
    sol = []
    for item in q:
        if item in pro:
            index = pro.index(item)
            if index == 0:
                sol.append(-1)
                continue
            if index % 2 == 0:
                sol.append(pro[int((index-2)/2)])
            else:
                sol.append(pro[int((index-1)/2)])
        else:
            sol.append(-1)
    return sol


a = solution(3, [1,4,7])
print(a)
a = solution(3, [7, 3, 5, 1])
print(a)
a = solution(5, [19, 14, 28])
print(a)