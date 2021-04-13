a = [5,2,9,-3,5,20,10,-7,2,3,-4,0,-2,15,5]


class FenwickTree:
    def __init__(self, a):
        self.tree = a[:]
        i = 1
        for i in range(1,len(a)+1):
            p = i + (i & -i)
            if p < len(a):
                self.tree[p-1] += self.tree[i-1]

    def sum(self,i, j):
        s = 0
        i+=1
        j+=1
        while j >= i:
            s += self.tree[j-1]
            j -= j & -j
        return s - self.tree[i-2]
    
    def update(self, i, num):
        i += 1
        prev = self.tree[i-1]
        self.tree[i-1] = num
        while True:
            i += i & -i
            if i >= len(a):
                break
            self.tree[i-1] -= prev
            self.tree[i-1] += num
expected_tree = [5,7,9,13,5,25,10,41,2,5,-4,1,-2,13,5]
tree = FenwickTree(a)

#print(tree.sum(1,6))
#print(tree.sum(4,9))

expected_tree_2 = [5,7,4,8,5,25,10,36,2,5,-4,1,-2,13,5]
tree.update(2, 4)
print(expected_tree_2)
print(tree.tree)
