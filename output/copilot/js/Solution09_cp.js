/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let isNegative = x < 0;
    if(isNegative){
        x = x * -1;
    }
    while(x > 0){
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if(isNegative){
        result = result * -1;
    }
    if(result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1){
        return 0;
    }
    return result;
    
};