public class Solution19_cp { 
    public List<Integer> countSmaller(int[] nums) {
        List<Integer> res = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return res;
        }
        int n = nums.length;
        int[] count = new int[n];
        int[] index = new int[n];
        for (int i = 0; i < n; i++) {
            index[i] = i;
        }
        mergeSort(nums, index, count, 0, n - 1);
        for (int i = 0; i < n; i++) {
            res.add(count[i]);
        }
        return res;

    }
    private void mergeSort(int[] nums, int[] index, int[] count, int start, int end) {
        if (start >= end) {
            return;
        }
        int mid = start + (end - start) / 2;
        mergeSort(nums, index, count, start, mid);
        mergeSort(nums, index, count, mid + 1, end);
        merge(nums, index, count, start, end);
    }
    private void merge(int[] nums, int[] index, int[] count, int start, int end) {
        int mid = start + (end - start) / 2;
        int left = start;
        int right = mid + 1;
        int rightCount = 0;
        int[] newIndex = new int[end - start + 1];
        int i = 0;
        while (left <= mid && right <= end) {
            if (nums[index[right]] < nums[index[left]]) {
                newIndex[i] = index[right];
                rightCount++;
                right++;
            } else {
                newIndex[i] = index[left];
                count[index[left]] += rightCount;
                left++;
            }
            i++;
        }
        while (left <= mid) {
            newIndex[i] = index[left];
            count[index[left]] += rightCount;
            left++;
            i++;
        }
        while (right <= end) {
            newIndex[i] = index[right];
            right++;
            i++;
        }
        for (int j = start; j <= end; j++) {
            index[j] = newIndex[j - start];
        }
    }
}
