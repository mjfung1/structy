

var firstMissingPositive = function(nums) {
    let set = new Set(nums);
    let max = Math.max(...nums);
    
    if (max <= 0) return 1;
    
    for (let i = 1; i <= max + 1; i++) {
        if (!set.has(i)) return i;
    }
    
};