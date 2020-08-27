/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (nums.length === 0) return false;
    const rotationIndex = findRotationIndex(nums);
};

function findRotationIndex(nums) {
    let low = 0;
    let high = nums.length;
    let possiblePivot = low + parseInt((high - low) / 2);

    if (possiblePivot-1 < 0) {
        return possiblePivot;
    }
    if (possiblePivot + 1 >= nums.length) {
        return possiblePivot;
    }

    while(possiblePivot) {

    }


}