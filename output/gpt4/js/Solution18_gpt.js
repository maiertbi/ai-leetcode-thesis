/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function(distance) {
    for (let i = 3; i < distance.length; i++) {
        if (distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3]) {
            return true; // case 1: Fourth line crosses first line
        }
        if (i >= 4 && distance[i - 1] === distance[i - 3] && distance[i] + distance[i - 4] >= distance[i - 2]) {
            return true; // case 2: Fifth line crosses first line
        }
        if (i >= 5 && distance[i - 2] >= distance[i - 4] && distance[i - 3] >= distance[i - 1] &&
                distance[i - 1] + distance[i - 5] >= distance[i - 3] && distance[i] + distance[i - 4] >= distance[i - 2]) {
            return true; // case 3: Sixth line crosses first line
        }
    }
    return false;
};
