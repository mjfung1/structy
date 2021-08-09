
// cadanes algorithm;
var maxSubArray = function(nums) {
    let max = -Infinity;
    let localMax = -Infinity;
    
    for (let num of nums) {
        localMax = Math.max(localMax + num, num);
        max = Math.max(max, localMax);
    }
    return localMax;
};