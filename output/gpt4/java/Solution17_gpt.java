class Solution17_gpt {
    public int maxCoins(int[] nums) {
        int n = nums.length;
        int[] newNums = new int[n + 2];
        
        newNums[0] = newNums[n + 1] = 1;
        for (int i = 0; i < n; i++) {
            newNums[i + 1] = nums[i];
        }
        
        int[][] dp = new int[n + 2][n + 2];
        
        for (int len = 1; len <= n; len++) {
            for (int left = 1; left + len - 1 <= n; left++) {
                int right = left + len - 1;
                
                for (int lastBurst = left; lastBurst <= right; lastBurst++) {
                    int coins = newNums[left - 1] * newNums[lastBurst] * newNums[right + 1];
                    coins += dp[left][lastBurst - 1] + dp[lastBurst + 1][right];
                    
                    dp[left][right] = Math.max(dp[left][right], coins);
                }
            }
        }
        
        return dp[1][n];
    }
}
