
// 90. Subsets II


var _subsetsWithDup = function(nums, visited) {
    if (nums.length === 0) return [[]];
    
    let num = nums[0];
    let remainder = nums.slice(1);
    
    let setsWithoutNum = _subsetsWithDup(remainder, visited);
    
    let setsWithNum = setsWithoutNum.map(subarray => [ num, ...subarray ]);
    
    
    return [ ...setsWithoutNum, ...setsWithNum ];
};

var subsetsWithDup = function(nums) {
    let visited = new Set();
    nums.sort((a,b) => a-b);
    let subsets = _subsetsWithDup(nums);
    
    let output = [];
    for (let set of subsets) {
        let key = set.join(',');
        if (!visited.has(key)) {
            visited.add(key);
            output.push(set);
        }
    }
    
    return output;
};