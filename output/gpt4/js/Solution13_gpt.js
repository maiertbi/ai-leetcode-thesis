/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const result = [-1, -1];
    const left = findLeft(nums, target);

    if (left === nums.length || nums[left] !== target) {
        return result;
    }

    result[0] = left;
    result[1] = findLeft(nums, target + 1) - 1;
    return result;
};

function findLeft(nums, target) {
    let left = 0, right = nums.length;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
