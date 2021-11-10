
// 46. Permutations


var permute = function(nums) {
    if (!nums.length) return [ [] ];
    
    let num = nums[0];
    let remainder = nums.slice(1);
    
    let perms = permute(remainder);
    let fullPerms = [];
    
    for (let perm of perms) {
        
        for (let i = 0; i <= perm.length; i++) {
            let start = perm.slice(0, i);
            let end = perm.slice(i);
            fullPerms.push([ ...start, num, ...end ])
        }
    }
    
    return fullPerms;
};