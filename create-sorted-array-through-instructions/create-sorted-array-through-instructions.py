def b_search(nums, search_item, start, end):
    if end < start:
        return -1
    k = int((end-start)/2) + start
    y = search_item
    if nums[k] < y and k == end:
        return k
    elif nums[k] < y and y <= nums[k+1]:
        return k
    elif y < nums[k]:
        return b_search(nums, search_item, start, k-1)
    else:
        return b_search(nums, search_item, k+1, end)

def binary_search(nums, search_item):
    '''
    Given an array and search_item give index of where to insert search_item
    @nums: List[int]
    @search_item: int
    '''
    return b_search(nums, search_item, start, end)


a = [1,3,3,3,2,4,2,1,2]
min_cost = 0
sorted_a = []
total_cost = 0
for num in a:
    index = b_search(sorted_a, num, 0, len(sorted_a)-1)
    if index == -1:
        sorted_a.append(num)
        min_cost = 0
    else:
        j = index
        while j+1 < len(sorted_a) and sorted_a[j+1] == num:
            j+=1
        sorted_a = sorted_a[:index+1] + [num] + sorted_a[index+1:]
        min_cost = min(len(sorted_a) - j, index+1)
    total_cost += min_cost

print(total_cost)