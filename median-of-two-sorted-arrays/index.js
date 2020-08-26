var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length + nums2.length % 2 === 0) {
        return (getMedian(nums1) + getMedian(nums2)) / 2;
    } else {
        if (num)
    }
};

const getMedian = nums => {
    if (nums.length % 2 === 0) {
        const mid = parseInt(Math.floor((nums.length+1)/2));
        return (nums[mid] + nums[mid+1])/2;
    } else {
        const mid = parseInt(Math.floor(nums.length/2));
        return nums[mid];
    }
}