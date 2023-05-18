/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    
    let prevPrev = 1;
    let prev = 2;
    let current;
    
    for (let i = 3; i <= n; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }
    
    return current;
};