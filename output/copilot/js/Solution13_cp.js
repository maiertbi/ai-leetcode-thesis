/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start + end) / 2);
    let result = [-1, -1];
    while (start <= end) {
        if (nums[mid] === target) {
            result[0] = mid;
            result[1] = mid;
            let left = mid - 1;
            let right = mid + 1;
            while (nums[left] === target) {
                result[0] = left;
                left--;
            }
            while (nums[right] === target) {
                result[1] = right;
                right++;
            }
            return result;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return result;
    
};