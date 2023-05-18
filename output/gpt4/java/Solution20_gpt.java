

class Solution20_gpt {
    int maxSum;

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
    
        TreeNode() {}
        TreeNode(int val) { this.val = val; }
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    public int maxPathSum(TreeNode root) {
        maxSum = Integer.MIN_VALUE;
        getMaxPathSum(root);
        return maxSum;
    }

    private int getMaxPathSum(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int leftSum = Math.max(getMaxPathSum(node.left), 0);
        int rightSum = Math.max(getMaxPathSum(node.right), 0);
        int pathSum = node.val + leftSum + rightSum;

        maxSum = Math.max(maxSum, pathSum);

        return node.val + Math.max(leftSum, rightSum);
    }




}