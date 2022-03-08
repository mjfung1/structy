
// 11. Container With Most Water


var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        let leftWall = height[left];
        let rightWall = height[right];
        
        let width = right - left;
        let base = Math.min(leftWall, rightWall);
        
        maxWater = Math.max(maxWater, width * base);
        
        if (leftWall > rightWall) {
            right--;
        } else {
            left++;
        }
    }
    
    return maxWater;
};