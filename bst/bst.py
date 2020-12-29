class BST:
    def __init__(self, v):
        self.left = None
        self.right = None
        self.v = v

def printBST(root, level):

    item = ''
    for i in range(level):
        item += '.'
    if root == None:
        item += 'null'
        print(item)
        return
    else:
        item += '{v}'.format(v=root.v)
    print(item)
    printBST(root.left, level+1)
    printBST(root.right, level+1)

root = BST(12)

five = BST(5)
root.left = five 

fourteen = BST(14)
root.right = fourteen

three = BST(3)
five.left = three

seven = BST(7)
five.right = seven

one = BST(1)
three.left=one

nine=BST(9)
seven.right=nine

eight=BST(8)
nine.left=eight

eleven=BST(11)
nine.right=eleven

thirteen=BST(13)
fourteen.left=thirteen

seventeen=BST(17)
fourteen.right=seventeen

twenty=BST(20)
seventeen.right=twenty

eighteen=BST(18)
twenty.left=eighteen

# printBST(root,0)


def delete(root, v):
    if root.left and root.left.v == v:
        # handle delete root v on leaf node
        if root.left.left == None and root.left.right == None:
            root.left = None
        elif root.left.left != None and root.left.right == None:
            temp = root.left
            root.left = root.left.left
            temp.left = None
            temp = None
        elif root.left.left == None and root.left.right != None:
            temp = root.left
            root.left = root.left.right
            temp.right = None
            temp = None
    elif root.right and root.right.v == v:
        # handle delete root v on right node
        if root.right.left == None and root.right.right == None:
            root.right = None
        elif root.right.left != None and root.right.right == None:
            temp = root.right
            root.right = root.right.left
            temp.left = None
            temp = None
        elif root.right.left == None and root.right.right != None:
            temp = root.right
            root.right = root.right.right
            temp.right = None
            temp = None
    else:
        if v < root.v:
            delete(root.left, v)
        else:
            delete(root.right, v)

delete(root, 3)
delete(root, 7)
printBST(root, 0)