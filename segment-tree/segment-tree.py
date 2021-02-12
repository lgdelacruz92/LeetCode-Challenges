class SegTree:
    def __init__(self, val, r, left=None, right=None):
        self.val = val
        self.range=r
        self.left = left
        self.right = right


def sum(root, i,j):
    r = root.range
    if i <= r[0] and r[1] <= j:
        return root.val
    elif r[1] < i or r[0] > j:
        return 0
    else:
        return sum(root.left, i, j) + sum(root.right, i, j)

def inrange(val, lower, upper):
    # inclusive
    return lower <= val and val <= upper

def update(root, i, new_val):
    r = root.range
    if not inrange(i, r[0], r[1]):
        return (0,0)

    r_diff = r[0] - r[1]
    if r_diff == 0:
        old = root.val
        root.val = new_val
        return (old, root.val) 
    
    left = update(root.left, i, new_val)
    right = update(root.right, i, new_val)
    if left[0] == 0 and left[1] == 0:
        old = root.val
        root.val -= right[0]
        root.val += right[1]
        return (old, root.val) 
    else:
        old = root.val
        root.val -= left[0]
        root.val += left[1]
        return (old, root.val)
    

def makeSegmentTree(arr,i,j):
    if j-1 <= i:
        root = SegTree(arr[i],(i,j-1))
        return root
    mid = int((j-i) / 2) + i
    left = makeSegmentTree(arr,i,mid)
    right = makeSegmentTree(arr,mid,j)
    root = SegTree(left.val + right.val, (i,j-1),left, right)
    return root

def printSegTree(root,level):
    line = ''
    for i in range(level):
        line += ' .'
    line += '{val} [{i},{j}]'.format(val=root.val, i=root.range[0],j=root.range[1])
    print(line)
    if root.left:
        printSegTree(root.left, level+1)
    if root.right:
        printSegTree(root.right, level+1)

a = [2,3,-1,5,-2,4,8,10]
root = makeSegmentTree(a,0,len(a))
# printSegTree(root, 0)
# print(sum(root,1,4))
# print(sum(root,3,7))
update(root, 3, 7)

printSegTree(root, 0)