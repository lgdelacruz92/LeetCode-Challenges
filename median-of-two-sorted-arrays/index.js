function search(nums, target) {
    if (nums.length === 0) return false;
    const pivot = findPivot(nums);
    if (target < nums[0]) {
        return _search(nums, target, pivot + 1, nums.length - 1);
    } else {
        if (nums[nums.length - 1] > nums[0]) {
            return _search(nums, target, 0, nums.length);
        } else {
            return _search(nums, target, 0, pivot);
        }
    }
}

function _search(nums, target, i, j) {
    if (i > j) return false;
    if (i === j) {
        return nums[i] === target;
    }
    const mid = i + parseInt((j - i) / 2);
    if (nums[mid] < target) {
        return _search(nums, target, mid + 1, j);
    } else if (nums[mid] > target) {
        return _search(nums, target, i, mid - 1);
    } else {
        return nums[mid] === target;
    }
}

function findPivot(nums) {
    let low = 0;
    let high = nums.length - 1;
    let posPivot = low + parseInt((high - low) / 2);

    while (low <= high) {
        if (low === high) break;
        if (nums[posPivot] <= nums[posPivot + 1]) {
            // pivot not found
            if (nums[posPivot] > nums[low]) {
                low = posPivot + 1;
            } else {
                if (nums[posPivot] === nums[low] && nums[posPivot] === nums[high]) {
                    low += 1;
                    high -= 1;
                } else {
                    if (nums[low] > nums[posPivot]) {
                        high = posPivot;
                    } else {
                        low = posPivot + 1;
                    }
                }
            }
            // pivot
            posPivot = low + parseInt((high - low) / 2);
        } else {
            break;
        }
    }
    return posPivot
}

console.log(search([2,5,6,0,0,1,2], 0)); // true
console.log(search([2,5,6,0,0,1,2], 3)); // false
console.log(search([1, 1], 0)); // false
console.log(search([1, 3], 3)); // true
console.log(search([3, 1], 3)); // true
console.log(search([3, 1], 0)); // false
console.log(search([3, 1], 1)); // true
console.log(search([3, 1, 1], 0)); // false
console.log(search([1, 3, 1, 1, 1], 3)); // true
console.log(search([1, 1, 3, 1], 3)); // true
console.log(search([1, 1, 1, 3, 1], 3)); // true