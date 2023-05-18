public class Solution04_cp {
    public int mySqrt(int x) {
        int left = 0;
        int right = x;
        int mid = 0;
        while (left <= right) {
            mid = left + (right - left) / 2;
            if (mid * mid == x) {
                return mid;
            } else if (mid * mid < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }
}
