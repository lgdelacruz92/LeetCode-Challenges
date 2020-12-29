import os

os.system('python3 bst.py > output')
os.system('diff output test1 > diff-file')

if os.path.getsize('diff-file') > 0:
    print('\033[31mError: the output is different from expected\033[0m')