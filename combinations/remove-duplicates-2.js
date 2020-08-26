/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let prevNum = 'a';
    let dupCount = 0;
    for (let j = i; j < nums.length; j++) {
        if (dupCount < 2 && prevNum === nums[j]) {
            // it's fine 
            // add count and keep going
            dupCount += 1;
        } else if (dupCount < 2 && prevNum !== nums[j]) {
            prevNum = nums[j];
            dupCount = 1;
            i = j;
        } else if (dupCount >= 2 && prevNum === nums[j]) {
            nums[j] = 'a';
        } else {
            prevNum = nums[j];
            dupCount = 1;
            i = j;
        }
    }

    while (nums.indexOf('a') !== -1) {
        const ind = nums.indexOf('a');
        nums.splice(ind, 1);
    }
    return nums;
};