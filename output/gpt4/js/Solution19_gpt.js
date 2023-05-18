class BinaryIndexedTree {
    constructor(n) {
        this.tree = new Array(n + 1).fill(0);
    }

    update(index, value) {
        while (index < this.tree.length) {
            this.tree[index] += value;
            index += index & -index;
        }
    }

    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}

var countSmaller = function(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    const indices = new Map();
    for (let i = 0; i < nums.length; i++) {
        indices.set(sortedNums[i], i + 1);
    }

    const result = [];
    const bit = new BinaryIndexedTree(nums.length);
    for (let i = nums.length - 1; i >= 0; i--) {
        const index = indices.get(nums[i]);
        result.push(bit.query(index - 1));
        bit.update(index, 1);
    }
    return result.reverse();
};
