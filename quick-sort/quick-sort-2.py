def swap(a, i, j):
    temp = a[i]
    a[i] = a[j]
    a[j] = temp

def partition(a, start, end):
    pivot = a[end]
    i = start-1
    for num in range(start, end):
        if a[num] <= pivot:
            i += 1
            swap(a, i, num)
    swap(a, i+1, end)
    return i+1


def qsort(a, start, end):
    if start < end:
        p = partition(a, start, end)
        qsort(a,start, p-1)
        qsort(a,p+1,end)

def quicksort(a):
    qsort(a, 0, len(a)-1)

a = [1,3,2,5,4, 4]
quicksort(a)
print(a)