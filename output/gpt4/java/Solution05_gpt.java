public class Solution05_gpt {
    public int climbStairs(int n) {
        if (n == 1 || n == 2) {
            return n;
        }
        
        int prevPrev = 1;
        int prev = 2;
        int current = 0;
        
        for (int i = 3; i <= n; i++) {
            current = prevPrev + prev;
            prevPrev = prev;
            prev = current;
        }
        
        return current;
    }
}
