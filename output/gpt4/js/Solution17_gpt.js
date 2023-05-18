/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const n = nums.length;
    const newNums = new Array(n + 2);
    
    newNums[0] = newNums[n + 1] = 1;
    for (let i = 0; i < n; i++) {
        newNums[i + 1] = nums[i];
    }
    
    const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));
    
    for (let len = 1; len <= n; len++) {
        for (let left = 1; left + len - 1 <= n; left++) {
            const right = left + len - 1;
            
            for (let lastBurst = left; lastBurst <= right; lastBurst++) {
                let coins = newNums[left - 1] * newNums[lastBurst] * newNums[right + 1];
                coins += dp[left][lastBurst - 1] + dp[lastBurst + 1][right];
                
                dp[left][right] = Math.max(dp[left][right], coins);
            }
        }
    }
    
    return dp[1][n];
};
