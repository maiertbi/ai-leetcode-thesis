/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let result = [];
    let sorted = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        let index = findIndex(sorted, nums[i]);
        result[i] = index;
        sorted.splice(index, 0, nums[i]);
    }
    return result;    
};
function findIndex(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};
