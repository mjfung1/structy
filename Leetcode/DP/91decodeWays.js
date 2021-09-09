
// 91. Decode Ways


var numDecodings = function(s) {
    let memo = {}
    
    function dfs(index) {
        if (index in memo) return memo[index];
        
        if (index === s.length) return 1;
        
        if (s[index] === '0') return 0;
        
        let result = dfs(index + 1);
      
        if (index + 1 < s.length && s.slice(index, index + 2) <= '26'  && s[index] !== '0') {
            result += dfs(index + 2);
        }
        
        memo[index] = result;
        return result;
    }
    
    return dfs(0);
};
