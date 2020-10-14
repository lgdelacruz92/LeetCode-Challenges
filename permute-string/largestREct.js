/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    return divide(0, heights.length, heights);
};

function divide(i, j, heights) {
    if (i === j-1) {
        return heights[i];
    }
    
    const mid = Math.floor((j-i)/2) +i;
    const left = divide(i, mid, heights);
    const right = divide(mid, j, heights);
    return Math.max(Math.min(left, right) * 2, left, right);
}

console.log(largestRectangleArea([2,1,5,6,2,3]));