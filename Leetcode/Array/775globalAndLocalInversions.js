

// 775. Global and Local Inversions

var isIdealPermutation = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (Math.abs(num - i) > 1) return false;
    }
    
    return true;
};