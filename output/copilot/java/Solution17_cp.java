public class Solution17_cp {
    public int maxCoins(int[] nums) {
        int n = nums.length;
        int[] newNums = new int[n + 2];
        for (int i = 0; i < n; i++) {
            newNums[i + 1] = nums[i];
        }
        newNums[0] = newNums[n + 1] = 1;
        int[][] dp = new int[n + 2][n + 2];
        for (int len = 1; len <= n; len++) {
            for (int left = 1; left <= n - len + 1; left++) {
                int right = left + len - 1;
                for (int i = left; i <= right; i++) {
                    dp[left][right] = Math.max(dp[left][right],
                            newNums[left - 1] * newNums[i] * newNums[right + 1] + dp[left][i - 1] + dp[i + 1][right]);
                }
            }
        }
        return dp[1][n];

    }

}
