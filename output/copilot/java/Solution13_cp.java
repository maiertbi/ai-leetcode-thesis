public class Solution13_cp {
    public int[] searchRange(int[] nums, int target) {
        int[] ans = { -1, -1 };
        int n = nums.length;
        int l = 0;
        int r = n - 1;
        while (l <= r) {
            int mid = (l + r) / 2;
            if (nums[mid] == target) {
                int i = mid;
                int j = mid;
                while (i >= 0 && nums[i] == target) {
                    i--;
                }
                while (j < n && nums[j] == target) {
                    j++;
                }
                ans[0] = i + 1;
                ans[1] = j - 1;
                return ans;
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }

}
