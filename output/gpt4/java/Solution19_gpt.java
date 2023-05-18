import java.util.*;

class Solution19_gpt {
    public List<Integer> countSmaller(int[] nums) {
        int[] sortedNums = nums.clone();
        Arrays.sort(sortedNums);
        Map<Integer, Integer> indices = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            indices.put(sortedNums[i], i + 1);
        }
        
        List<Integer> result = new ArrayList<>();
        BinaryIndexedTree bit = new BinaryIndexedTree(nums.length);
        for (int i = nums.length - 1; i >= 0; i--) {
            int index = indices.get(nums[i]);
            result.add(bit.query(index - 1));
            bit.update(index, 1);
        }
        Collections.reverse(result);
        return result;
    }

    private class BinaryIndexedTree {
        int[] tree;

        public BinaryIndexedTree(int n) {
            tree = new int[n + 1];
        }

        public void update(int index, int value) {
            while (index < tree.length) {
                tree[index] += value;
                index += index & -index;
            }
        }

        public int query(int index) {
            int sum = 0;
            while (index > 0) {
                sum += tree[index];
                index -= index & -index;
            }
            return sum;
        }
    }
}
