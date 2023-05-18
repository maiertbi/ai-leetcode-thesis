/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);
    let median = 0;
    if (merged.length % 2 === 0) {
        median = (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
    } else {
        median = merged[Math.floor(merged.length / 2)];
    }
    return median;
    
};