/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;

    while (x !== 0) {
        let lastDigit = x % 10;
        x = (x / 10) | 0;

        if (reversed > Math.pow(2, 31) / 10 - 1 || (reversed === Math.pow(2, 31) / 10 - 1 && lastDigit > 7)) {
            return 0;
        }
        if (reversed < -Math.pow(2, 31) / 10 || (reversed === -Math.pow(2, 31) / 10 && lastDigit < -8)) {
            return 0;
        }

        reversed = reversed * 10 + lastDigit;
    }

    return reversed;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;

    while (x !== 0) {
        let lastDigit = x % 10;
        x = (x / 10) | 0;

        if (reversed > (Math.pow(2, 31) - 1) / 10 || (reversed === (Math.pow(2, 31) - 1) / 10 && lastDigit > 7)) {
            return 0;
        }
        if (reversed < -Math.pow(2, 31) / 10 || (reversed === -Math.pow(2, 31) / 10 && lastDigit < -8)) {
            return 0;
        }

        reversed = reversed * 10 + lastDigit;
    }

    return reversed;
};
