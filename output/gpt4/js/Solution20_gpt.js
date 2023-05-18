function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum = -Infinity;

    function getMaxPathSum(node) {
        if (node === null) {
            return 0;
        }

        const leftSum = Math.max(getMaxPathSum(node.left), 0);
        const rightSum = Math.max(getMaxPathSum(node.right), 0);
        const pathSum = node.val + leftSum + rightSum;

        maxSum = Math.max(maxSum, pathSum);

        return node.val + Math.max(leftSum, rightSum);
    }

    getMaxPathSum(root);
    return maxSum;
};
